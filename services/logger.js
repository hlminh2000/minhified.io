const   winston = require('winston')
        moment = require("moment")
        
const logTimestamp = () => {
    return moment().format('YYYY-MM-DD_hh:mm:ss')
}

const logger = new winston.Logger({
    levels: winston.config.syslog.levels,
    colors: winston.config.syslog.colors,
});

logger.add(winston.transports.Console);

logger.info(logTimestamp(), 'Logger setup')

module.exports = {
    endPointLog: (req, res, next) => {
        logger.info(logTimestamp(), req.method, req.baseUrl)
        next()
    },
    info: logger.info
}