const httpStatus = require('http-status');
const { RESPONSE_SUCCESS, RESPONSE_SUCCESS_MESSAGE } = require('../constants/responseMessages');
const { SCHEMA_CONTACT_FROM } = require('../constants/schemaNames');
const database = require('../database');
const ApiError = require('../utils/ApiError');

const getAllContacts = async (data) => {
  const contacts = await database.find({ model: SCHEMA_CONTACT_FROM });
  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
    length: contacts.length,
    data: contacts,
  });
};

const createContact = async (data) => {
  const contact = await database.create({ model: SCHEMA_CONTACT_FROM, payload: data });
  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
    data: contact,
  });
};

const getContactById = async (data) => {
  const contact = await database.findById({ model: SCHEMA_CONTACT_FROM, payload: { id: data.id } });
  if (!contact) throw new ApiError(httpStatus.NOT_FOUND, 'Contact Not Found');
  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
    data: contact,
  });
};

const updateContact = async (data) => {
  const contact = await database.updateById({ model: SCHEMA_CONTACT_FROM, payload: data });
  if (!contact) throw new ApiError(httpStatus.NOT_FOUND, 'Contact Not Found');
  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
    data: contact,
  });
};

const deleteContact = async (data) => {
  await getContactById(data);
  await database.deleteById({ model: SCHEMA_CONTACT_FROM, payload: data });

  return ({
    status: RESPONSE_SUCCESS,
    message: RESPONSE_SUCCESS_MESSAGE,
  });
};

module.exports = {
  getAllContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
