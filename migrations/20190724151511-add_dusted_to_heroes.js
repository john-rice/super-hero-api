'use strict';
var models = require('../models')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn('heroes', 'dusted', { type: Sequelize.BOOLEAN, defaultValue: 0 }).then(() => {
      return models.Heroes.bulkCreate([
        { id: 2, dusted: true },
        { id: 6, dusted: true }
      ], { updateOnDuplicate: ['dusted'] })
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn('heroes', 'dusted')
  }
};
