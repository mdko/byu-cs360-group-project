/** A database entity **/

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("StoredFood", { // primary key is an id that is automatically-created by sequelize, and foreign-key constrait is automatically added
    food: {
    	type: DataTypes.TEXT,
    	//values: ['meat_eggs', 'poultry', 'seafood', 'dairy', 'fruit', 'vegetable', 'nut_grain_bean'],
    	allowNull: false
    },
    expirationDate: {
    	type: DataTypes.DATE,
    	allowNull: false
    },
    amount: {
    	type: DataTypes.FLOAT,
    	allowNull: false
    },
    measurement: {
    	type: DataTypes.ENUM,
    	values: ['gallons','pounds','grams', 'ounces', 'liters'],
    	allowNull: false
    },
    storageLocation: {
    	type: DataTypes.TEXT,
    	allowNull: true
    }
  });
};