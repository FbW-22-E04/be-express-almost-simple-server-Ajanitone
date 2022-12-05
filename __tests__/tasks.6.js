const request = require('supertest');

describe('Endpoint `/isNumber/xx`', () => {
  test('should respond', async done =>{
    const app = require('../server');
    app.on('listening', () => {
      global.agent = request.agent(app);
    });
    const res = await request(app).get('/isNumber/2')
    expect(res.statusCode).toBe(200)
    expect(res.body).not.toBe('')
    done()
  })

  test('should tell if its not a number', async (done) => {
    const app = require('../server');
    const res = await request(app).get('/isNumber/abc')
    expect(res.text).not.toBe('')
    expect(res.text).toMatch(/This is not a number/)
    done()
  })

  test('should tell if it is a number', async (done) => {
    const app = require('../server');
    const res = await request(app).get('/isNumber/123')
    expect(res.text).not.toBe('')
    expect(res.text).toMatch(/This is a number/)
    await app.close();
    done()
  })
});
