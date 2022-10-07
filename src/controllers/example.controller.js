const { exampleService } = require('../services');
const catchAsync = require('../utils/catchAsync');
const { getAllParams } = require('../utils/helper');

// getAllExamples controller
const getAllExamples = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await exampleService.getAllExamples(data);
  return res.send(response);
});

// createExample controller
const createExample = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await exampleService.createExample(data);
  return res.send(response);
});

// getExampleById controller
const getExampleById = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await exampleService.getExampleById(data);
  return res.send(response);
});

// updateExample controller
const updateExample = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await exampleService.updateExample(data);
  return res.send(response);
});

// deleteExample controller
const deleteExample = catchAsync(async (req, res) => {
  const data = getAllParams(req);

  const response = await exampleService.deleteExample(data);
  return res.send(response);
});

module.exports = {
  getAllExamples,
  createExample,
  getExampleById,
  updateExample,
  deleteExample,
};
