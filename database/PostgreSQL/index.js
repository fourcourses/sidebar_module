const Sequelize = require('sequelize');
const TOKEN = require('./config.js');



const sequelize = new Sequelize('postgres', 'postgres', TOKEN, {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

const database = 'Restaurants';
const tableName = 'restaurants';
const copyFile = '/home/harrisonywu/Documents/HRImmersive/SDC/sidebar/database/GeneratedData/sample100generatedData.csv'

sequelize.query(`DROP DATABASE IF EXISTS ${database}`)
  .then(() => console.log(`Database: ${database} dropped`))
  .then(() => sequelize.query(`CREATE DATABASE ${database}`)
  .then(() => console.log(`Database: ${database} created`)))
  .then(() => sequelize.query(`DROP TABLE IF EXISTS ${tableName}`))
  .then(() => sequelize.query(
    `CREATE TABLE ${tableName} (
      restaurantID INTEGER,
      address TEXT,
      neighborhood TEXT,
      crossStreet  TEXT,
      parking TEXT,
      dining TEXT,
      cuisines TEXT,
      hours TEXT,
      phone TEXT,
      website TEXT,
      payment CHAR(26),
      dress TEXT,
      chef TEXT,
      catering TEXT,
      privateFacilities TEXT,
      PRIMARY KEY (restaurantID)
    )`))
    .then(() => console.log(`table: ${tableName} created!`))
    .then(() => sequelize.query(`COPY restaurants
      FROM '${copyFile}' (FORMAT CSV, DELIMITER(','), HEADER)   
      `))
    .then(() => console.log('Time to seed Postgres database: )', process.uptime()));

