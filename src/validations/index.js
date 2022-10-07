const exampleSchema = require('./example.validation');
const contactSchema = require('./contact.validation');
const freeAuditSchema = require('./freeAudit.validation');

const paramSchema = {
  example: exampleSchema,
  contact: contactSchema,
  freeAudit: freeAuditSchema,
};
module.exports = paramSchema;
