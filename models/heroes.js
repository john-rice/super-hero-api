module.exports = (sequelize, Sequelize, Teams) => {
  return sequelize.define('heroes', {
    id: {
      type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true,
    },
    name: { type: Sequelize.STRING, },
    realName: { type: Sequelize.STRING, },
    firstAppearance: { type: Sequelize.STRING, },
    slug: { type: Sequelize.STRING, },
    teamId: { type: Sequelize.INTEGER, reference: { model: Teams, key: 'id' } }
  })
}
