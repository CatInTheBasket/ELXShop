'use strict';
const fs = require("fs");

module.exports = {
  up (queryInterface, Sequelize) {
    let users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));
    users.forEach(el => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    return queryInterface.bulkInsert('Users', users);
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null);
  }
};
