import Sequelize from 'sequelize';

const db = new Sequelize(
  'bdgteutptjktys7thrij', // base de datos
  'ulu8jhjctacen3id',     // usuario
  'Gq1obU00WtU1rEOYOayf', // contraseña
  {
    host: 'bdgteutptjktys7thrij-mysql.services.clever-cloud.com', // host
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