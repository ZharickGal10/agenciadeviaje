import Sequelize from 'sequelize';

const db = new Sequelize(
  'bmcgx1ysujeuvkkfzssp', // base de datos
  'ud1mnm3ww0pqslo8',     // usuario
  'ud1mnm3ww0pqslo8', // contraseña
  {
    host: 'bmcgx1ysujeuvkkfzssp-mysql.services.clever-cloud.com', // host
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306, // agregar explícitamente el puerto si es necesario
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  }
);

export default db;