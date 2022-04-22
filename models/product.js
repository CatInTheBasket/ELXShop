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
    title: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"title must not empty"
        },
      }
    },
    imageURL: DataTypes.STRING,
    price: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"price must not empty"
        },
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"stock must not empty"
        },
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"category must not empty"
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};