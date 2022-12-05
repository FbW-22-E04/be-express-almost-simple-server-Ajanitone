const request = require('supertest');

describe('Endpoint `/time`', () => {
  test('should respond', async done =>{
    const app = require('../server');
    app.on('listening', () => {
      global.agent = request.agent(app);
    });
    const res = await request(app).get('/time')
    expect(res.statusCode).toBe(200)
    expect(res.body).not.toBe('')
    done()
  })

  test('should respond with time string in ISO format', async (done) => {
    const app = require('../server');
    const res = await request(app).get('/time')
    expect(res.text).toMatch(/^[0-9]{4}-((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01])|(0[469]|11)-(0[1-9]|[12][0-9]|30)|(02)-(0[1-9]|[12][0-9]))T(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9])\.[0-9]{3}Z$/)
    await app.close();
    done()
  })
});
