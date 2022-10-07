const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    if (next) {
      console.log('error :', err.message);
      next(err);
    } else {
      console.log('error :', err.message);
      res.status(500).json({ error: err.message, status: false });
    }
  });
};

module.exports = catchAsync;
