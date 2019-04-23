const express = require('express');
const bodyParser = require('body-parser');
const SidebarInfoMongo = require('../database/MongoDB/SidebarInfoSchema');
const SidebarInfoPostgres = require('../database/PostgreSQL/controllers/controllers.js')
// const Overview = require('../database/Overview');
const path = require('path');
const cors = require('cors');

const port = 3003;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/restaurants/:id', express.static(path.join(__dirname, '/../client/dist')));

//For mongo
// app.get('/api/restaurants/:id/info', (req, res) => {
//   SidebarInfoMongo.getSidebarInfo(req.params.id)
//     .then(info => {
//       res.send(info);
//     });
// });

// For Cassandra
// This is unedited, please change
// app.get('/api/restaurants/:id/info', (req, res) => {
//   SidebarInfo.getSidebarInfo(req.params.id)
//     .then(info => {
//       res.send(info);
//     });
// });

// For PostgreSQL
app.get('/api/restaurants/:id/info', SidebarInfoPostgres.findById);

const server = app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

module.exports = app;
module.exports.server = server;
