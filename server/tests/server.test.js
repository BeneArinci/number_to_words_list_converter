const request = require('supertest');
const app = require('../src/index');

describe('Test the root path and middlewares', () => {
  test('It should response the GET method', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  test('It should send 404 for page not found"', async () => {
    const res = await request(app).get('/wrong-route');
    expect(res.statusCode).toBe(404);
  });
});
