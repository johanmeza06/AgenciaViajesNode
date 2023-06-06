import Sequelize from 'sequelize';
import dotenv from "dotenv/config";


const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, // tiempo de espera maximo para conectarse a la base de datos
        idle: 10000 // tiempo maximo de inactividad de la conexion
    },
    operatorAliases: false
})

export default db;