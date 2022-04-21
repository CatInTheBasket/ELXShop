'use strict';
const {
  Model
} = require('sequelize');
const itemtransaction = require('./itemtransaction');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User);
      Transaction.belongsToMany(models.Product, {
        through: models.ItemTransaction
      })
    }
  }
  Transaction.init({
    transactionDate: DataTypes.DATE,
    totalPrice: DataTypes.INTEGER,
    totalStock: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};