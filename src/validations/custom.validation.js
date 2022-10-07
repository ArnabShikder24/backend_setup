const objectId = (value, helpers) => {
  console.log('objectId-validation-value', value);
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid mongo id');
  }
  return value;
};
module.exports.objectId = objectId;
