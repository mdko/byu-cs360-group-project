/** A database entity **/

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("GoogleUser", {
    openid: { 
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};