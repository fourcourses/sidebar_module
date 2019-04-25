const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'Restaurants' });

const findById = (req, res) => {
  const query =`SELECT * FROM "RestaurantListing" WHERE restaurant_id = ?`;
  const params = req.params.id;
  client.execute(query, [ params ], { prepare: true})
    // .then(result => res.send(result))
    .then(result => res.send(result.rows[0]))
    .catch(err => console.log('Received an error while querying: ', err));
}

exports.findById = findById;
