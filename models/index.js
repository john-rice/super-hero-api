const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const TeamsModel = require('./teams')
const HeroesModel = require('./heroes')

const config = allConfigs['development']

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
})

const Teams = TeamsModel(connection, Sequelize)
const Heroes = HeroesModel(connection, Sequelize, Teams)

Heroes.belongsTo(Teams)
Teams.hasMany(Heroes)

module.exports = {
  Heroes,
  Teams,
}
