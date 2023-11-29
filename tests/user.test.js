// tests/book.test.js
const mongoose = require('mongoose');
const { setup, teardown } = require('./setupTest');
const request = require('supertest');
const { app } = require('../index');

beforeAll(async () => {
  await setup();
});

afterAll(async () => {
  await teardown();
});

describe('new user', () => {
  it('should save a new user', async () => {
    const newUserData = {
        username: 'Test User',
        password: 'Test Password',
    };
    await request(app).post('/api/users', newUserData).expect(201).expect('Content-Type', /application\/json/);
  });
});
