/** A database entity **/

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("FacebookUser", {
    facebookid: { 
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};