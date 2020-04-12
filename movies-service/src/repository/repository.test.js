const test = require("tape");
const repository = require("./repository");

function runTests() {

  let id = null;

  test("Repository GetAllMovies", (t) => {
    repository.getAllMovies((err, movies) => {
      if (movies && movies.length > 0) id = movies[0]._id;
      t.assert(!err && movies && movies.length > 0, "All Movies Returned");
      t.end();
    })
  })

  test("Repository GetMovieById", (t) => {
    repository.getMovieById(id, (err, movie) => {
      t.assert(!err && movie, "Movie By Id Returned");
      t.end();
    })
  })

  test("Repository GetMoviePremieres", (t) => {
    repository.getMoviePremieres((err, movies) => {
      t.assert(!err && movies && movies.length > 0, "All Movies Returned");
      t.end();
    })
  })

  test("Repository Disconnect", (t) => {
    t.assert(repository.disconnect(), "Repository disconnected");
    t.end();
  })
}

module.exports = { runTests };