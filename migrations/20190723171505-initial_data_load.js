'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('teams', [
      { name: 'The Avengers', slug: 'avengers', },
      { name: 'The X-Men', slug: 'x-men', },
    ])

    return queryInterface.bulkInsert('heroes', [
      { name: 'Captain America', realName: 'Steve Rogers', firstAppearance: 'Captain America Comics #1', slug: 'captain-america', teamId: 1 },
      { name: 'Spider-Man', realName: 'Peter Parker', firstAppearance: 'Amazing Fantasy #15', slug: 'spider-man', teamId: 1, },
      { name: 'Iron Man', realName: 'Tony Stark', firstAppearance: 'Tales of Suspense #39', slug: 'iron-man', teamId: 1 },
      { name: 'Thor', realName: 'Thor Odinson', firstAppearance: 'Journey into Mystery #83', slug: 'thor', teamId: 1 },
      { name: 'Captain Marvel', realName: 'Carol Danvers', firstAppearance: 'Marvel Super-Heroes #13', slug: 'captain-marvel', teamId: 1 },
      { name: 'Doctor Strange', realName: 'Stephen Strange', firstAppearance: 'Strange Tales #110', slug: 'doctor-stange', teamId: 1, },
      { name: 'Iceman', realName: 'Bobby Drake', firstAppearance: 'The X-Men #1', slug: 'iceman', teamId: 2 },
      { name: 'Shadow Cat', realName: 'Kitty Pryde', firstAppearance: 'Uncanny X-Men #129', slug: 'shadow-cat', teamId: 2 },
      { name: 'Cyclops', realName: 'Scott Summers', firstAppearance: 'The X-Men #1', slug: 'cyclops', teamId: 2 },
      { name: 'Beast', realName: 'Hank McCoy', firstAppearance: 'X-Men #1', slug: 'beast', teamId: 2 },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.bulkDelete('heroes', null, {})
    return queryInterface.bulkDelete('teams', null, {})
  }
};
