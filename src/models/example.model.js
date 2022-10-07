const { default: mongoose } = require('mongoose');
const { SCHEMA_EXAMPLE } = require('../constants/schemaNames');

const schema = new mongoose.Schema({
  exampleData: {
    type: String,
    default: 'Sample Example Data',
  },
},
{ timestamps: { createdAt: true, updatedAt: true } });

module.exports = mongoose.model(SCHEMA_EXAMPLE, schema);
