const httpStatus = require('http-status');
const { RESPONSE_SUCCESS, RESPONSE_SUCCESS_MESSAGE } = require('../constants/responseMessages');
const { SCHEMA_FREE_AUDIT_FORM } = require('../constants/schemaNames');
const database = require('../database');
const ApiError = require('../utils/ApiError');

const getAllFreeAudits = async (data) => {
  const freeAudits = await database.find({ model: SCHEMA_FREE_AUDIT_FORM });
  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
    length: freeAudits.length,
    data: freeAudits,
  });
};

const createFreeAudit = async (data) => {
  const freeAudit = await database.create({ model: SCHEMA_FREE_AUDIT_FORM, payload: data });
  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
    data: freeAudit,
  });
};

const getFreeAuditById = async (data) => {
  const freeAudit = await database.findById({ model: SCHEMA_FREE_AUDIT_FORM, payload: { id: data.id } });
  if (!freeAudit) throw new ApiError(httpStatus.NOT_FOUND, 'FreeAudit Not Found');
  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
    data: freeAudit,
  });
};

const updateFreeAudit = async (data) => {
  const freeAudit = await database.updateById({ model: SCHEMA_FREE_AUDIT_FORM, payload: data });
  if (!freeAudit) throw new ApiError(httpStatus.NOT_FOUND, 'FreeAudit Not Found');
  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
    data: freeAudit,
  });
};

const deleteFreeAudit = async (data) => {
  await getFreeAuditById(data);
  await database.deleteById({ model: SCHEMA_FREE_AUDIT_FORM, payload: data });

  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
  });
};

module.exports = {
  getAllFreeAudits,
  createFreeAudit,
  getFreeAuditById,
  updateFreeAudit,
  deleteFreeAudit,
};
