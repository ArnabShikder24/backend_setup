const httpStatus = require('http-status');
const { RESPONSE_SUCCESS, RESPONSE_SUCCESS_MESSAGE } = require('../constants/responseMessages');
const { SCHEMA_EXAMPLE } = require('../constants/schemaNames');
const database = require('../database');
const ApiError = require('../utils/ApiError');

const getAllExamples = async (data) => {
  const examples = await database.find({ model: SCHEMA_EXAMPLE });
  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
    length: examples.length,
    data: examples,
  });
};

const createExample = async (data) => {
  const example = await database.create({ model: SCHEMA_EXAMPLE, payload: data });
  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
    data: example,
  });
};

const getExampleById = async (data) => {
  const example = await database.findById({ model: SCHEMA_EXAMPLE, payload: { id: data.id } });
  if (!example) throw new ApiError(httpStatus.NOT_FOUND, 'Example Not Found');
  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
    data: example,
  });
};

const updateExample = async (data) => {
  const example = await database.updateById({ model: SCHEMA_EXAMPLE, payload: data });
  if (!example) throw new ApiError(httpStatus.NOT_FOUND, 'Example Not Found');
  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
    data: example,
  });
};

const deleteExample = async (data) => {
  await getExampleById(data);
  await database.deleteById({ model: SCHEMA_EXAMPLE, payload: data });

  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
  });
};

module.exports = {
  getAllExamples,
  createExample,
  getExampleById,
  updateExample,
  deleteExample,
};
