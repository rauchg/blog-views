const ms = require('ms')
const requestIp = require('request-ip')

// seen ips in the last hour
let seen = {}

// reset blacklist every hour
setInterval(() => { seen = {} }, ms('1h'))

// env
const { NODE_ENV } = process.env

module.exports = (req) => {
  if ('development' === NODE_ENV) {
    // ignore limits during development
    return
  }

  const clientIp = requestIp.getClientIp(req)
  seen[clientIp] = seen[clientIp] || 0
  if (seen[clientIp] > 10) {
    const err = new Error('Too many views per IP')
    err.statusCode = 429
    throw err
  }
  seen[clientIp]++
}
