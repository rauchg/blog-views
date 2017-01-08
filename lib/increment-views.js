const db = require('./db')

module.exports = function incrementViews (id) {
  const ref = db.ref('views').child(id)
  return ref.transaction(currentViews => {
    // if it has never been set it returns null
    if (currentViews === null) currentViews = 0
    return currentViews + 1
  })
}
