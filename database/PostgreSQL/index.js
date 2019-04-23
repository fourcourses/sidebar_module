const Sequelize = require('sequelize');
const TOKEN = require('./config.js');

const sequelize = new Sequelize('restaurants', 'postgres', TOKEN, {
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

module.exports = sequelize;
