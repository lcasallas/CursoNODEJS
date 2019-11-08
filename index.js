const express = require('express');
const app = express();

const { config } = require('./config/index');

const authApi = require('./routes/auth.js');
const moviesApi = require('./routes/movies.js');
const userMoviesApi = require('./routes/userMovies');

const {
  logErrors,
  errorHandler,
  wrapErrors
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//body parser
app.use(express.json());

authApi(app);
moviesApi(app);
userMoviesApi(app);

//captura error 404
app.use(notFoundHandler);

//Error Middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
