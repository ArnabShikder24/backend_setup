const { default: mongoose } = require('mongoose');
const { SCHEMA_CONTACT_FROM } = require('../constants/schemaNames');

const schema = new mongoose.Schema({
  fullName: {
    type: String,
    default: 'anonymous',
  },
  email: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
  country: {
    type: Object,
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

module.exports = mongoose.model(SCHEMA_CONTACT_FROM, schema);
