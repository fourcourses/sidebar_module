const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'Restaurants' });

const path = require('path');
const cors = require('cors');

const port = 3003;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/restaurants/:id', express.static(path.join(__dirname, '/../client/dist')));


const findById = (req, res) => {
  const query =`SELECT * FROM "RestaurantListing" WHERE restaurant_id = ?`;
  const params = req.params.id;
  client.execute(query, [ params ], { prepare: true})
    .then(result => res.send(result.rows[0]))
    .catch(err => console.log('Received an error while querying: ', err));
}

// For Cassandra
app.get('/api/restaurants/:id/info', findById);

const server = app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

module.exports = app;
module.exports.server = server;
