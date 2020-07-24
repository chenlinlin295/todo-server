import { Sequelize } from 'sequelize'
import config from 'config'

const { 
    database,
    user,
    password,
    host,
    port,
    connectionLimit
} = config.get('Customer.mysql')

const mysqlConnection = new Sequelize(database, user, password, {
    host,
    port,
    dialect: "mysql",
    dialectOptions: {
        charset: "utf8",
    },
    pool: {
        max: connectionLimit,
        min: 0,
        idle: 10000,
    }
})

export default mysqlConnection
