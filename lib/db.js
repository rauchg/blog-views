const admin = require('firebase-admin')
const { join } = require('path')
const cert = join(__dirname, '../service-account.json')

admin.initializeApp({
  credential: admin.credential.cert(cert),
  databaseURL: "https://rauchg-blog.firebaseio.com"
});

module.exports = admin.database()
