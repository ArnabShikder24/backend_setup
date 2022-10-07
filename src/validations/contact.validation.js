const Joi = require('joi');
const { objectId } = require('./custom.validation');

const contactSchema = {
  getAllContacts: Joi.object({
  }),
  createContact: Joi.object({
    fullName: Joi.string(),
    email: Joi.string().required().email(),
    phone: Joi.string(),
    message: Joi.string(),
    ipAddress: Joi.string(),
    country: Joi.object(),
    token: Joi.string(),
    geoip: Joi.object(),
  }),
  getContactById: Joi.object({
    id: Joi.required().custom(objectId),

  }),
  updateContact: Joi.object({
    id: Joi.required().custom(objectId),
    fullName: Joi.string(),
    email: Joi.string().email(),
    phone: Joi.string(),
    message: Joi.string(),
    ipAddress: Joi.string(),
    country: Joi.object(),
    token: Joi.string(),
    geoip: Joi.object(),
  }),
  deleteContact: Joi.object({
    id: Joi.required().custom(objectId),
  }),
};

module.exports = contactSchema;
