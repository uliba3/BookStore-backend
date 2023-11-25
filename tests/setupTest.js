// tests/setupTest.js
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const { app, server } = require('../index');

let mongoServer;

module.exports.setup = async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  try {
    await mongoose.connect(mongoUri);
    console.log('connected to test db');
  } catch (err) {
    console.error(err);
  }
};

module.exports.teardown = async () => {
  try {
    await mongoose.disconnect();
    await mongoServer.stop();
    await new Promise((resolve) => server.close(resolve)); // Wait for server to close
    console.log('Server closed during test teardown.');
  } catch (err) {
    console.error(err);
  }
};
