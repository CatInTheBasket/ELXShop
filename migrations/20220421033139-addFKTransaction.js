'use strict';

module.exports = {
  up(queryInterface, Sequelize) {

    return queryInterface.addColumn('Transactions', 'UserId', {
      type: Sequelize.INTEGER,
      references: { model: 'Users', key: 'id' }
    })
  },

  down(queryInterface, Sequelize) {

    return queryInterface.removeColumn('Transactions', 'UserId', {})
  }
};
