const mongoClient = require("mongodb").MongoClient;
var connection = null;
var db = null;

function connect(callback) {
  if (connection) return callback(null, db);

  mongoClient.connect(process.env.MONGO_CONNECTION, function (err, conn) {
    if (err) return callback(err, null);

    connection = conn;
    db = conn.db(process.env.DATABASE);
    return callback(null, db);

  })
};

function disconnect() {
  if (!connection) return true;
  connection.close();
  connection = null;
  return true;
};

module.exports = { connect, disconnect };