const db = require('./lib/db')
const verify = require('./lib/verify')
const { parse } = require('url')

let add = 0

module.exports = async (req, res) => {
  // ensure no duplicate voting
  verify(req)

  const { query: { id } } = parse(req.url, true)

  if (!id) {
    const err = new Error('Missing `id` parameter with blog post id')
    err.statusCode = 400
    throw err
  }

  add++
  const ref = db.ref('views').child(id)
  const total = ((await ref.once('value')).val() || 0) + add
  if (add) {
    add = 0
    await ref.set(total)
  }
  return { total }
}
