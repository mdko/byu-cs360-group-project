/** A database entity **/

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("EmailUser", {
    email: { 
    	type: DataTypes.STRING,
    	allowNull: false
    },
    passwordhash: { 
    	type: DataTypes.TEXT,
    	allowNull: false
    },
    salt: {
    	type: DataTypes.TEXT,
    	allowNull: false
  	}
  });
};