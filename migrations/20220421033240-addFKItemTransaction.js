'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('ItemTransactions', 'ProductId', {
      type: Sequelize.INTEGER,
      references: { model: 'Products', key: 'id' }
    }).then(result=>{
      queryInterface.addColumn('ItemTransactions', 'TransactionId', {
        type: Sequelize.INTEGER,
        references: { model: 'Transactions', key: 'id' }
    })})
  },

  down(queryInterface, Sequelize) {

    return queryInterface.removeColumn('ItemTransactions', 'ProductId', {}).then(result=>{
      queryInterface.removeColumn('ItemTransactions', 'TransactionId', {})
    })
  }
};
