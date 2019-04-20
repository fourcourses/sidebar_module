const SidebarInfo = require('./SidebarInfo');
const faker = require('faker');
const db = require('./index.js');
const csvWriter = require('csv-write-stream');
const fs = require('fs');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const sampleSidebarItems = [];
// poppulateItems creates 100 restaurants worth of data, all stored in sampleSidebarItems and sampleOverviewItems.

const numberOfEntries = 10;
console.time('Time to create JSON file w/ ' + numberOfEntries + ' entries');

const writer = csvWriter();
const populateItems = () => {
  

  const randRange = (min, max) => (Math.floor(Math.random() * (max + 1 - min)) + min);
  for (let restaurantID = 1; restaurantID <= numberOfEntries; restaurantID += 1) {

    restaurantID = restaurantID;
    const address = [faker.address.streetAddress(), faker.address.city(), faker.address.stateAbbr()].join(' ');
    let neighborhood = faker.address.citySuffix();
    neighborhood = neighborhood.charAt(0).toUpperCase() + neighborhood.slice(1);
    const crossStreet = [faker.address.streetName(), faker.address.streetName()].join(' and ');
    const parking = faker.lorem.sentences();
    const dining = faker.commerce.productAdjective();
      
    const cuisineCount = randRange(1, 3);
    let cuisines = [];
    for (let i = 0; i < cuisineCount; i++) {
      cuisines.push(faker.commerce.productMaterial());
    };
    cuisines = cuisines.join(', ');
    
    const hours = 'Monday - Friday, ' + randRange(1, 12) + ':00am - ' + randRange(1, 12) + ':00pm';
    const phone = faker.phone.phoneNumber();
    const website = faker.internet.url();
    const payment = 'Visa, Discover, MasterCard';
    const dress = [faker.commerce.productAdjective(), faker.commerce.productMaterial()].join(' ');
    const chef = faker.name.findName();
      
    if (randRange(0, 2) === 2) {
      catering = faker.lorem.sentences();
    };
    if (randRange(0, 2) === 2) {
      privateFacilities = faker.lorem.sentences();
    };
    console.log(`${restaurantID},${address},${neighborhood},${crossStreet},${parking},${dining},${cuisines},${hours},${phone},${website},${payment},${dress},${chef}`);
    }
}

populateItems();

console.log('end of file');
// process.exit(0);

// const csvWriter = createCsvWriter({
//   path: __dirname + '/100generatedData.csv',
//   header: [
//       {id: 'restaurantID', title: 'restaurantID'},
//       {id: 'address', title: 'address'},
//       {id: 'neighborhood', title: 'neighborhood'},
//       {id: 'crossStreet', title: 'crossStreet'},
//       {id: 'parking', title: 'parking'},
//       {id: 'dining', title: 'dining'},
//       {id: 'cuisines', title: 'cuisines'},
//       {id: 'hours', title: 'hours'},
//       {id: 'phone', title: 'phone'},
//       {id: 'website', title: 'website'},
//       {id: 'payment', title: 'payment'},
//       {id: 'dress', title: 'dress'},
//       {id: 'additional', title: 'additional'},
//       {id: 'chef', title: 'chef'},
//       {id: 'catering', title: 'catering'},
//       {id: 'privateFacilities', title: 'privateFacilities'},
//   ]
// });

// csvWriter.writeRecords(sampleSidebarItems)
//   .then(() => {
//       console.timeEnd('Time to create JSON file w/ ' + numberOfEntries + ' entries');
//       process.exit(0);
//     });
