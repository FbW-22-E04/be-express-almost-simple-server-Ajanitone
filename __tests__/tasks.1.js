const fs = require('fs');

describe('JS file', () => {
  test('`server.js` should exist', async (done) => {
    expect(fs.existsSync('./server.js')).toBeTruthy();
    done();
  })
})
