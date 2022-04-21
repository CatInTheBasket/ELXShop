'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Transaction, {
        through: models.ItemTransaction
      })
    }

        
    static getProductByCategory(category) {
      let query = {
        attributes: ['id', 'title', 'price', 'stock', 'category'],
        order: [['stock', 'ASC'], ['stock', 'ASC']]
      };
      if (category != "") {
        query.where = { category: category };
      }

      return Product.findAll(query);
    }
  }
  Product.init({
    title: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};