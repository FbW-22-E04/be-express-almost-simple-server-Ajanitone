const request = require('supertest');

describe('Endpoint `/hello`', () => {
  test('should respond', async done =>{
    const app = require('../server');
    app.on('listening', () => {
      global.agent = request.agent(app);
    });
    const res = await request(app).get('/hello')
    expect(res.statusCode).toBe(200)
    expect(res.body).not.toBe('')
    await app.close();
    done()
  })
});
