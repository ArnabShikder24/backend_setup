/* eslint-disable prefer-destructuring */
const luxon = require('luxon');

const getTodayDate = () => {
  const time = luxon.DateTime.now();
  const date = time.toLocaleString();
  const { day, month, year } = time.toObject();

  return { date: `${year}-${month}-${day}`, time: date };
};
const getAllParams = (req) => {
  let token;
  if (req.headers.Authorization) {
    token = req.headers.Authorization.split(' ')[1];
    // console.log('Authorization', token);
  }
  if (req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1];
    // console.log('authorization', token);
  }

  return {
    ...req.query, ...req.body, ...req.params, ...(token && { token }),
  };
};
module.exports = { getTodayDate, getAllParams };
