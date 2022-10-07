const { default: mongoose } = require('mongoose');
const { SCHEMA_FREE_AUDIT_FORM } = require('../constants/schemaNames');

const schema = new mongoose.Schema({
  fullName: {
    type: String,
    default: 'anonymous',
  },
  email: {
    type: String,
    default: '',
  },
  businessName: {
    type: String,
    default: '',
  },
  websiteUrl: {
    type: String,
    default: '',
  },
  businessType: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '',
  },
  budget: {
    type: String,
    default: '',
  },
  ipAddress: {
    type: String,
    default: '',
  },
  geoip: {
    type: Object,
  },
},
{ timestamps: { createdAt: true, updatedAt: true } });

module.exports = mongoose.model(SCHEMA_FREE_AUDIT_FORM, schema);
