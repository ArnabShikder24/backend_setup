const mongoose = require('mongoose');
const { httpServer: app } = require('./app');
const config = require('./config');
const logger = require('./config/logger');

let server;
const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

async function assertDatabaseConnectionOk() {
  logger.info('Checking database connection...');
  await mongoose.connect(config.database.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
      // await ExampleSchema.updateMany({ season: 's2' }, { season: '2' });
      logger.info('Database connection OK!');
    }).catch((err) => {
      logger.error('Unable to connect to the database:');
      logger.error(err.message);
      console.log(err);
      exitHandler(err);
    });
}

async function init() {
  logger.info(`environment (${config.env || 'NaN'})`);

  const port = process.env.PORT || config.database.port || 8080;

  await assertDatabaseConnectionOk();
  console.log(`Starting Sequelize + Express example on port ${port}...`);
  app.listen(port, () => {
    console.log(`Express server started   ${port}. Try some routes, such as '/api/users'.`);
  });
}

init();

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
