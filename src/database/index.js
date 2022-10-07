const models = require('../models');

const find = async ({ model, payload }) => {
  console.log('find', model, payload);
  const data = await models[model].find({ ...payload && { payload } });
  return data;
};
const create = async ({ model, payload }) => {
  console.log('create', model, payload);
  const data = await models[model].create({ ...payload && payload });
  return data;
};

const findById = async ({ model, payload }) => {
  console.log('findById', model, payload);
  const data = await models[model].findById(payload.id);
  return data;
};

const updateById = async ({ model, payload }) => {
  console.log('updateById', model, payload);
  const data = await models[model].findByIdAndUpdate(payload.id, { ...payload }, { useFindAndModify: false, new: true });
  return data;
};

const deleteById = async ({ model, payload }) => {
  console.log('deleteById', model, payload);
  const data = await models[model].findByIdAndDelete(payload.id);
  return data;
};

const database = {
  find, create, deleteById, findById, updateById,
};
module.exports = database;
