const schemas = require("./schemas");
module.exports = (app, repository) => {

  app.get('/movies', (req, res, next) => {
    repository.getAllMovies((err, movies) => {
      if (err) return next(err);
      res.json(movies);
    })
  })

  app.get('/movies/premieres', (req, res, next) => {
    repository.getMoviePremieres((err, movies) => {
      if (err) return next(err);
      res.json(movies);
    })
  })

  app.get('/movies/:id', (req, res, next) => {
    var id = req.params.id;
    repository.getMovieById(id, (err, movies) => {
      if (err) return next(err);
      res.json(movies);
    })
  })

  app.post('/movies', (req, res, next) => {
    const validated = schemas.movieSchema.validate(req.body);
    if (validated.error) return res.status(400).json(validated.error);
    repository.addMovie(validated.value, (err, result) => {
      if (err) return next(err);
      res.json(result);
    })
  })
}