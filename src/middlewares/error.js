/* eslint-disable max-len */
const httpStatus = require('http-status');
const { default: mongoose } = require('mongoose');
const config = require('../config');
const { RESPONSE_FAILURE } = require('../constants/responseMessages');
const ApiError = require('../utils/ApiError');

const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || error instanceof mongoose.Error ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    console.error('errorConverter-->', message);
    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
  if (config.env === 'production' && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus.INTERNAL_SERVER_ERROR;
  }

  res.locals.errorMessage = err.message;

  console.error('errorHandler-->', message);
  const response = {
    backend_version: config.backend_version,
    status: RESPONSE_FAILURE,
    code: statusCode,
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  };

  // if (config.env === 'development') {
  //   _error(err);
  // }

  return res.status(statusCode).send(response);
};

module.exports = {
  errorConverter,
  errorHandler,
};
