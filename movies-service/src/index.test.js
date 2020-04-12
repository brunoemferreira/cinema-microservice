
// Roda a bateria de Testes da App
require("dotenv-safe").config();
require("./config/mongodb.test.js").runTests();
require("./repository/repository.test.js").runTests();
require("./server/server.test.js").runTests();
require("./api/movies.test.js").runTests();