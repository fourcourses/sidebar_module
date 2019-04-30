const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cassandra = require('cassandra-driver');
const redis = require('redis');
const redisClient = redis.createClient();
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'Restaurants' });


const path = require('path');
const cors = require('cors');

const port = 3003;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/restaurants/:id', express.static(path.join(__dirname, '/../client/dist')));

//Fix this to use redis cache
const findById = (req, res) => {
  const query =`SELECT * FROM "RestaurantListing" WHERE restaurant_id = ?`;
  const params = req.params.id;
  client.execute(query, [ params ], { prepare: true})
    .then(result => {
      result = result.rows[0]
      // resultStringified = JSON.stringify(result);
      // redisClient.setex(params, 3600, resultStringified);
      res.status(200);
      res.send(result);
      
    })
    .catch(err => {
      res.status(404);
      res.send('Error while querying: ', err)
    });
}

const getCache = (req, res) => {
  let id = req.params.id;
  redisClient.get(id, (err, result) => {
    if (result) {
      console.log('in the cache')
      res.send(result);
    } else {
      console.log('not in the cache')
      findById(req, res);
    }
  })
}

//Redis Cache
// app.get('/api/restaurants/:id/info', getCache);

//No Redis Cache
app.get('/api/restaurants/:id/info', findById)

const server = app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

module.exports = app;
module.exports.server = server;
