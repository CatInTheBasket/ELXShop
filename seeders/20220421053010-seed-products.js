'use strict';
const fs = require("fs");

module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));
    products.forEach(el => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    return queryInterface.bulkInsert('Products', products);
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      return queryInterface.bulkDelete('Products', null);
  }
};