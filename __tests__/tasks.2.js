describe('app', () => {
  it('should be express instance', async (done) => {
    const server = require('../server');
    expect(server.constructor.name).toBe('Server');
    await server.close()
    done()
  })
})