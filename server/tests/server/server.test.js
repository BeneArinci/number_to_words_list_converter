const request = require('supertest');
const app = require('../../src/index');

describe('Test the root path and middlewares', () => {
  test('It should response the GET method', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect((res.body.message)).toBe('Welcome to the number-to-words converters API!');
  });

  test('It should send 404 for page not found"', async () => {
    const res = await request(app).get('/wrong-route');
    expect(res.statusCode).toBe(404);
    expect((res.body.message)).toBe('Not Found - /wrong-route');
  });
});

describe('Test the API route', () => {
  test('It should response to the GET method and format response correctly', async () => {
    const expectedValues = ['aa', 'ba', 'ca', 'ab', 'bb', 'cb', 'ac', 'bc', 'cc'];
    const res = await request(app).get('/api/wordsList')
      .query({ number: 22 });
    expect(res.statusCode).toBe(200);
    expect([...res.body.data]).toEqual(expect.arrayContaining(expectedValues));
  });
});
