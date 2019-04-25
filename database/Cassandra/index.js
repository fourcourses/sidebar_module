var ExpressCassandra = require('express-cassandra');

var models = ExpressCassandra.createClient({
    clientOptions: {
        contactPoints: ['127.0.0.1'],
        protocolOptions: { port: 9042 },
        keyspace: 'Restaurants',
        queryOptions: {consistency: ExpressCassandra.consistencies.one}
    },
    ormOptions: {
        defaultReplicationStrategy : {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'safe',
    }
});

var MyModel = models.loadSchema('RestaurantListing', {
    fields:{
        restaurant_id: 'int',
        address: 'text',
        neighborhood: 'text',
        cross_street: 'text',
        parking: 'text',
        dining: 'text',
        cuisines: 'text',
        hours: 'text',
        phone: 'text',
        website: 'text',
        payment: 'text',
        dress: 'text',
        chef: 'text',
        catering: 'text',
        private_facilities: 'text',
    },
    key:['restaurant_id'],
});

console.log(models.instance.RestaurantListing === MyModel);

MyModel.syncDB(function(err, result) {
    if (err) throw err;
});

