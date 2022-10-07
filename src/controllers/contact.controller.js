const { contactService } = require('../services');
const catchAsync = require('../utils/catchAsync');
const { getAllParams } = require('../utils/helper');

// getAllContacts controller
const getAllContacts = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await contactService.getAllContacts(data);
  return res.send(response);
});

// createContact controller
const createContact = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await contactService.createContact(data);
  return res.send(response);
});

// getContactById controller
const getContactById = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await contactService.getContactById(data);
  return res.send(response);
});

// updateContact controller
const updateContact = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await contactService.updateContact(data);
  return res.send(response);
});

// deleteContact controller
const deleteContact = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await contactService.deleteContact(data);
  return res.send(response);
});

module.exports = {
  getAllContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
