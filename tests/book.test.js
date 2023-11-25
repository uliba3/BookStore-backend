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

describe('Book model', () => {
  it('should save a new book', async () => {
    const newBookData = {
      title: 'Test Book',
      authors: ['Test Author'],
      id: 'AZ5J6B1-4BoC',
    };
    const response = await request(app).post('/api/books', newBookData);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0]).toEqual({
      title: 'Test Book',
      authors: ['Test Author'],
      id: 'AZ5J6B1-4BoC',
    });
  });
  
  it('should get all books', async () => {
    const response = await request(app).get('/api/books');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0]).toEqual({
      title: 'Test Book',
      authors: ['Test Author'],
      id: 'AZ5J6B1-4BoC',
    });
  });
});
