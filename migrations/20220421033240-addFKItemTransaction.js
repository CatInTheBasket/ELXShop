'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('ItemTransactions', 'ProductId', {
      type: Sequelize.INTEGER,
      references: { model: 'Products', key: 'id' }
    })
  },

  down(queryInterface, Sequelize) {

    return queryInterface.removeColumn('ItemTransactions', 'ProductId', {})
  }
};
