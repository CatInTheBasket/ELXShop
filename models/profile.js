'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User);
    }

    get getAge() {
      return new Date().getFullYear() - this.dateOfBirth.getFullYear();
    }
    
  }
  Profile.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"firstName must not empty"
        },
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"lastName must not empty"
        },
      }
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"dateOfBirth must not empty"
        },
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"UserId must not empty"
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};