const sequelize = require('sequelize')
//need to create this
const allConfigs = require ('../configs/sequelize')


const TeamsModel = require('./teams')

// create a connection

// export an instant of the team model

const config = allConfigs['development'] //same as allConfigs.development

const connection = new sequelize(config.database, config.username, config.password, {
    host: config.host
    dialect: config.dialect,
    
})

const Teams = TeamsModel(connection, sequelize)

module.exports = {
    Teams,
}
