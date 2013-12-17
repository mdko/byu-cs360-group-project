if (!global.hasOwnProperty('db')) {

  var Sequelize = require('sequelize')
    , sequelize = null
 
  if (process.env.HEROKU_POSTGRESQL_BROWN_URL) {
    console.log('Using postgresql on heroku')
    // the application is executed on Heroku ... use the postgres database
    var match = process.env.HEROKU_POSTGRESQL_BROWN_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
 
    sequelize = new Sequelize(match[5], match[1], match[2], {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    });
  } else {
    console.log('Using mysql on our local machine')
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize('fscounselor', 'counselor', null)
  }
 
  global.db = {
    Sequelize:    Sequelize,
    sequelize:    sequelize,
    FacebookUser: sequelize.import(__dirname + '/facebookuser'),
    StoredFood:   sequelize.import(__dirname + '/storedfood')//,
    //GoogleUser:   sequelize.import(__dirname + '/googleuser'),
    //EmailUser:    sequelize.import(__dirname + '/emailuser')
  }
 
  /*
    Associations can be defined here.
  */
  global.db.FacebookUser.hasMany(global.db.StoredFood)
  global.db.StoredFood.belongsTo(global.db.FacebookUser)
  // global.db.GoogleUser.hasMany(global.db.StoredFood)
  // global.db.EmailUser.hasMany(global.db.StoredFood)

}
 
module.exports = global.db