const SidebarInfo = require('./SidebarInfo');
const Overview = require('./Overview');
const faker = require('faker');
const db = require('./index.js');
const fs = require('fs');

const sampleSidebarItems = [];
const sampleOverviewItems = [];

// poppulateItems creates 100 restaurants worth of data, all stored in sampleSidebarItems and sampleOverviewItems.

console.time('Time to seed');

const populateItems = () => {
  const randRange = (min, max) => (Math.floor(Math.random() * (max + 1 - min)) + min);
  for (let restaurantId = 1; restaurantId <= 1000; restaurantId += 1) {
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

    let newOverviewItem = {};

    newOverviewItem.restaurantId = restaurantId;
    newOverviewItem.name = faker.company.companyName();
    newOverviewItem.rating = (Math.random() * 5).toFixed(1);
    newOverviewItem.reviewCount = Math.floor(Math.random() * 2000);
    const minRange = Math.floor(Math.random() * 42) + 8;
    const maxRange = minRange + Math.floor(Math.random() * 10) + 5
    newOverviewItem.costRange = [minRange, maxRange];
    newOverviewItem.cuisines = newSidebarItem.cuisines[0];
    newOverviewItem.description = faker.lorem.paragraph();
    const tagCount = randRange(1, 3);
    let tags = [];
    for (let i = 0; i < tagCount; i++) {
      const newTag = faker.commerce.productAdjective();
      if (tags.indexOf(newTag) < 0) {
        tags.push(newTag);
      }
    }
    newOverviewItem.tags = tags;

    sampleOverviewItems.push(newOverviewItem);
  }
}

populateItems();

console.log('About to write file');
console.log(typeof sampleSidebarItems)

const stringSampleSidebarItems = JSON.stringify(sampleSidebarItems);


fs.writeFile('sampleData.json', stringSampleSidebarItems, (err) => {
  if (err) {
    throw err;
  }
  return;
});

console.timeEnd('Time to seed');

process.exit(-1);


// const insertSampleItems = () => {
//   SidebarInfo.model.create(sampleSidebarItems)
//     .then(() => {
//       Overview.model.create(sampleOverviewItems)
//         .then(() => {
//           db.close()
//         });
//     });
// };

// insertSampleItems();
