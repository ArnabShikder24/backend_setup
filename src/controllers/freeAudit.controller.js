const { freeAuditService } = require('../services');
const catchAsync = require('../utils/catchAsync');
const { getAllParams } = require('../utils/helper');

// getAllFreeAudits controller
const getAllFreeAudits = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await freeAuditService.getAllFreeAudits(data);
  return res.send(response);
});

// createFreeAudit controller
const createFreeAudit = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await freeAuditService.createFreeAudit(data);
  return res.send(response);
});

// getFreeAuditById controller
const getFreeAuditById = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await freeAuditService.getFreeAuditById(data);
  return res.send(response);
});

// updateFreeAudit controller
const updateFreeAudit = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await freeAuditService.updateFreeAudit(data);
  return res.send(response);
});

// deleteFreeAudit controller
const deleteFreeAudit = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await freeAuditService.deleteFreeAudit(data);
  return res.send(response);
});

module.exports = {
  getAllFreeAudits,
  createFreeAudit,
  getFreeAuditById,
  updateFreeAudit,
  deleteFreeAudit,
};
