const bunyan = require('bunyan')

module.exports = bunyan.createLogger({
  name: 'example',
  level: 'trace',
  serializers: bunyan.stdSerializers
})
