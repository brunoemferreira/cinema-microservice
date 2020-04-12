const test = require('tape');
const supertest = require('supertest');
const movies = require('./movies');
const server = require("../server/server");
const repository = require("../repository/repository");

function runTests() {
  var app = null;
  server.start(movies, repository, (err, app) => {

    var id = null;
    test('GetAllMovies', (t) => {
      supertest(app)
        .get('/movies')  // passa a rota 
        .expect('Content-Type', /json/) // tipo de retorno esperado JSON
        .expect(200) //Código de retorno esperaedo 200  
        .end((err, res) => {
          if (res.body && res.body.length > 0)
            id = res.body[0]._id;
          t.assert(res.body && res.body.length > 0, "All Movies returned")
          t.end();
        })
    })


    test('GetMovieById', (t) => {
      supertest(app)
        .get('/movies/' + id)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          t.assert(res.body && res.body._id === id, "Movies By Id Returned")
          t.end();
        })
    })


    test('GetMoviePremieres', (t) => {
      supertest(app)
        .get('/movies/premieres')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          t.assert(res.body && res.body.length > 0, "Premiere Movies returned")
          t.end()
        })
    })

    server.stop();
  })
}

module.exports = { runTests }

