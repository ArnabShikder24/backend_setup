const path = require('path');
const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status');
const morgan = require('./config/morgan');

const routes = require('./routes/index');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');
const config = require('./config');
const { RESPONSE_SUCCESS_MESSAGE, RESPONSE_SUCCESS } = require('./constants/responseMessages');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

// v1 api routes
app.use('/v1', routes);

app.get('/v1/app-version', (req, res) => {
  res.send({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
    backend_version: config.backend_version,
  });
});

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Route Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);
module.exports = { httpServer: app };
