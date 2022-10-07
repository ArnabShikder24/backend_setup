const { SCHEMA_EXAMPLE, SCHEMA_FREE_AUDIT_FORM, SCHEMA_CONTACT_FROM } = require('../constants/schemaNames.js');

module.exports[SCHEMA_EXAMPLE] = require('./example.model.js');
module.exports[SCHEMA_FREE_AUDIT_FORM] = require('./freeAudit.model.js');
module.exports[SCHEMA_CONTACT_FROM] = require('./contact.model.js');
