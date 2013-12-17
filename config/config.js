var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')

module.exports = {
  development: {
    root: rootPath,
    app: {
      name: 'Food Storage Counselor'
    },
    facebook: {
      clientID: "186002698272202",
      clientSecret: "32e7dd40a09080aac10fa85bf8eead5b",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/google/callback",
      realm: "http://localhost:3000"
    }
  },
  production: {
    root: rootPath,
    app: {
      name: 'Food Storage Counselor'
    },
    facebook: {
      clientID: "327329327408053",
      clientSecret: "f804efe0547820565d1d00e41fb2cb0c",
      callbackURL: "http://fscounselor.herokuapp.com/auth/facebook/callback"
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://fscounselor.herokuapp.com/auth/google/callback",
      realm: "http://fscounselor.herokuapp.com"
    }
  }
}