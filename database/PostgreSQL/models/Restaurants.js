const Sequelize = require('sequelize');
const sequelize = require('../index.js')

const { Model } = Sequelize;

class Restaurants extends Model {}

Restaurants.init({
  restaurantID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  neighborhood: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  crossStreet : {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  parking: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  dining: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  cuisines: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  hours: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  phone: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  website: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  payment: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  dress: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  chef: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  catering: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  privateFacilities: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
}, {sequelize, modelName: 'restaurant'})

sequelize.sync();

module.exports = Restaurants;