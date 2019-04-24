const Sequelize = require('sequelize');
const sequelize = require('../index.js');

// Want req.params.id, use that to send a query to our postgreSQL database

const findById = (req, res) => {
  sequelize.query(`SELECT * FROM restaurants WHERE restaurant_id=${req.params.id}`)
  .then((data) => res.send(data[0][0]))
}

exports.findById = findById;
