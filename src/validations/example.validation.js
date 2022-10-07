const Joi = require('joi');
const { objectId } = require('./custom.validation');

const exampleSchema = {
  getAllExamples: Joi.object({
  }),
  createExample: Joi.object({
    exampleData: Joi.string(),
  }),
  getExampleById: Joi.object({
    id: Joi.required().custom(objectId),

  }),
  updateExample: Joi.object({
    id: Joi.required().custom(objectId),
    exampleData: Joi.string(),

  }),
  deleteExample: Joi.object({
    id: Joi.required().custom(objectId),
  }),
};

module.exports = exampleSchema;
