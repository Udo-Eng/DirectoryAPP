const winston = require('winston');


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'directory service' },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
  });


  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        level:"info",
        format: winston.format.simple(),
    }));
  }


  module.exports = logger;