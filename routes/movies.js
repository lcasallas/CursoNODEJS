const express = require('express');
const joi = require('@hapi/joi');
const MoviesServices = require('../services/movies');

const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandler');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesServices = new MoviesServices();

  //GET
  router.get('/', async function(req, res, next) {
    const { tags } = req.query;

    try {
      const movies = await moviesServices.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
    } catch (err) {
      next(err);
    }
  });

  //GET id
  router.get(
    '/:movieId',
    validationHandler(joi.object({ movieId: movieIdSchema }), 'params'),
    async function(req, res, next) {
      const { movieId } = req.params;

      try {
        const movies = await moviesServices.getMovie({ movieId });
        res.status(200).json({
          data: movies,
          message: 'movie retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  //POST
  router.post('/', validationHandler(createMovieSchema), async function(
    req,
    res,
    next
  ) {
    const { body: movie } = req; //: movie es para coloca un alias a la variable.
    try {
      const createMovieId = await moviesServices.createMovie({ movie });

      res.status(201).json({
        data: createMovieId,
        message: 'movie created'
      });
    } catch (err) {
      next(err);
    }
  });

  //PUT
  router.put(
    '/:movieId',
    validationHandler(joi.object({ movieId: movieIdSchema }), 'params'),
    validationHandler(updateMovieSchema),
    async function(req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;
      try {
        const updatedMovieId = await moviesServices.updateMovie({
          movieId,
          movie
        });
        res.status(200).json({
          data: updatedMovieId,
          message: 'movie updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  //DELETE
  router.delete(
    '/:movieId',
    validationHandler(joi.object({ movieId: movieIdSchema }), 'params'),
    async function(req, res, next) {
      const { movieId } = req.params;
      try {
        const deletedMovieId = await moviesServices.deleteMovie({ movieId });
        res.status(200).json({
          data: deletedMovieId,
          message: 'movie deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = moviesApi;
