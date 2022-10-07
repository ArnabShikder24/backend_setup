const dotenv = require('dotenv');

dotenv.config();

const config = {
  backend_version: '0.0.6',
  env: process.env.NODE_ENV,
  refresh_token_secret: 'only4values_token_refresh',
  access_token_secret: 'only4values_token_access',
  database: {
    url: process.env.DATABASE,
    port: process.env.PORT,
  },
};
module.exports = config;
