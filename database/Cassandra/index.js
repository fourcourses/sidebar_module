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

// MyModel or models.instance.RestaurantListing can now be used as the model instance
console.log(models.instance.RestaurantListing === MyModel);

// sync the schema definition with the cassandra database table
// if the schema has not changed, the callback will fire immediately
// otherwise express-cassandra will try to migrate the schema and fire the callback afterwards
MyModel.syncDB(function(err, result) {
    if (err) throw err;
    // result == true if any database schema was updated
    // result == false if no schema change was detected in your models
});

// models.instance.RestaurantListing.findOne({restaurant_id:2}, function(err, listing) {
//     if (err) {
//         console.log('Find one: ', err);
//     }
//     console.log('Entry 2 found. It's address is ', listing.address);
// })
