const httpStatus = require('http-status');
const { RESPONSE_FAILURE, RESPONSE_BAD_REQUEST } = require('../constants/responseMessages');
const { getAllParams } = require('../utils/helper');

const validate = (schema) => async (req, res, next) => {
  if (!schema) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: RESPONSE_FAILURE,
      message: 'Validation schema not found',
    });
  }
  const value = await schema.validate(getAllParams(req), { abortEarly: false });
  // const value = await schema.validate({ ...req.body, ...req.params }, { abortEarly: false });

  if (value.error) {
    const error = [];
    value.error.details.map((errorData) => error.push({ [errorData.context.key]: errorData.message }));
    return res.status(httpStatus.BAD_REQUEST).json({
      status: RESPONSE_FAILURE,
      message: RESPONSE_BAD_REQUEST,
      error,
    });
  }
  return next();
};

module.exports = validate;
