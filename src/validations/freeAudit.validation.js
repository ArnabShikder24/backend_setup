const Joi = require('joi');
const { objectId } = require('./custom.validation');

const freeAuditSchema = {
  getAllFreeAudits: Joi.object({
  }),
  createFreeAudit: Joi.object({
    fullName: Joi.string(),
    email: Joi.string().required().email(),
    businessName: Joi.string(),
    websiteUrl: Joi.string(),
    businessType: Joi.string(),
    location: Joi.string(),
    budget: Joi.string(),
    ipAddress: Joi.string(),
    geoip: Joi.object(),
  }),
  getFreeAuditById: Joi.object({
    id: Joi.required().custom(objectId),

  }),
  updateFreeAudit: Joi.object({
    id: Joi.required().custom(objectId),
    fullName: Joi.string(),
    email: Joi.string().email(),
    businessName: Joi.string(),
    websiteUrl: Joi.string(),
    businessType: Joi.string(),
    location: Joi.string(),
    budget: Joi.string(),
    ipAddress: Joi.string(),
    geoip: Joi.object(),

  }),
  deleteFreeAudit: Joi.object({
    id: Joi.required().custom(objectId),
  }),
};

module.exports = freeAuditSchema;
