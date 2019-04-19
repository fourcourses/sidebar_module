const SidebarInfo = require('./SidebarInfo');
const faker = require('faker');
const db = require('./index.js');
// const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const sampleSidebarItems = [];
const sampleOverviewItems = [];

// poppulateItems creates 100 restaurants worth of data, all stored in sampleSidebarItems and sampleOverviewItems.

const numberOfEntries = 100;
console.time('Time to create JSON file w/ ', numberOfEntries, 'entries');

const populateItems = () => {
  

  const randRange = (min, max) => (Math.floor(Math.random() * (max + 1 - min)) + min);
  for (let restaurantId = 1; restaurantId <= numberOfEntries; restaurantId += 1) {
    let newSidebarItem = {};

    newSidebarItem.restaurantId = restaurantId;
    newSidebarItem.address = [faker.address.streetAddress(), faker.address.city(), faker.address.stateAbbr()].join(' ');
    newSidebarItem.neighborhood = faker.address.citySuffix();
    newSidebarItem.neighborhood = newSidebarItem.neighborhood.charAt(0).toUpperCase() + newSidebarItem.neighborhood.slice(1);
    newSidebarItem.crossStreet = [faker.address.streetName(), faker.address.streetName()].join(' and ');
    newSidebarItem.parking = faker.lorem.sentences();
    newSidebarItem.dining = faker.commerce.productAdjective();

    const cuisineCount = randRange(1, 3);
    let cuisines = [];
    for (let i = 0; i < cuisineCount; i++) {
      cuisines.push(faker.commerce.productMaterial());
    }
    newSidebarItem.cuisines = cuisines.join(', ');
    newSidebarItem.hours = 'Monday - Friday, ' + randRange(1, 12) + ':00am - ' + randRange(1, 12) + ':00pm';
    newSidebarItem.phone = faker.phone.phoneNumber();
    newSidebarItem.website = faker.internet.url();
    newSidebarItem.payment = 'Visa, Discover, MasterCard';
    newSidebarItem.dress = [faker.commerce.productAdjective(), faker.commerce.productMaterial()].join(' ');
    newSidebarItem.chef = faker.name.findName();

    if (randRange(0, 2) === 2) {
      newSidebarItem.catering = faker.lorem.sentences();
    }
    if (randRange(0, 2) === 2) {
      newSidebarItem.privateFacilities = faker.lorem.sentences();
    }

    sampleSidebarItems.push(newSidebarItem); 
  }
}

populateItems();


const csvWriter = createCsvWriter({
  path: __dirname + '/generatedData.csv',
  header: [
      {id: 'restaurantID', title: 'restaurantID'},
      {id: 'address', title: 'address'},
      {id: 'neighborhood', title: 'neighborhood'},
      {id: 'crossStreet', title: 'crossStreet'},
      {id: 'parking', title: 'parking'},
      {id: 'dining', title: 'dining'},
      {id: 'cuisines', title: 'cuisines'},
      {id: 'hours', title: 'hours'},
      {id: 'phone', title: 'phone'},
      {id: 'website', title: 'website'},
      {id: 'payment', title: 'payment'},
      {id: 'dress', title: 'dress'},
      {id: 'additional', title: 'additional'},
      {id: 'chef', title: 'chef'},
      {id: 'catering', title: 'catering'},
      {id: 'privateFacilities', title: 'privateFacilities'},
  ]
});

csvWriter.writeRecords(records)       // returns a promise
  .then(() => {
      console.log('...Done');
  });


exports.sampleSidebarItems = sampleSidebarItems;


/* 
  Turn data from JSON TO CSV format, so it can be piped to a  csv file.
  


*/

// Console log for piping into gzip compression
// console.log(stringSampleSidebarItems);


// Write file for writing data into data.gz
// fs.writeFile('sampleData.json', stringSampleSidebarItems, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.timeEnd('Time to create JSON file w/ ', numberOfEntries, 'entries');
//   return;
// });

// process.exit(0);
