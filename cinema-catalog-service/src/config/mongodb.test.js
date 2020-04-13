const test = require("tape");
const mongodb = require("./mongodb");

function runTests() {

  test('MongoDB Connect', (t) => {
    mongodb.connect((err, db) => {
      t.assert(!err && db, 'Connection succeed!');
      t.end();
    })
  })

  test('MongoDB Disconnect', function (t) {
    t.assert(mongodb.disconnect(), 'Disconnected sucefully!');
    t.end();
  })
}

module.exports = { runTests };