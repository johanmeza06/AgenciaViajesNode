import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const db = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000, // tiempo de espera maximo para conectarse a la base de datos
      idle: 10000, // tiempo maximo de inactividad de la conexion
    },
    operatorAliases: false,
  }
);

export default db;
