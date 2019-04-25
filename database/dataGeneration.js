const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream('./database/GeneratedData/generatedData.csv')

const numberOfEntries = 1e7;
file.write('restaurant_id,address,neighborhood,cross_street,parking,dining,cuisines,hours,phone,website,payment,dress,chef,catering,private_facilities\n');

const populateItems = async(callback) => {
  const randRange = (min, max) => (Math.floor(Math.random() * (max + 1 - min)) + min);
  for (let restaurant_id = 1; restaurant_id <= numberOfEntries; restaurant_id += 1) {
    
    restaurant_id = restaurant_id;
    const address = [faker.address.streetAddress(), faker.address.city(), faker.address.stateAbbr()].join(' ');
    let neighborhood = faker.address.citySuffix();
    neighborhood = neighborhood.charAt(0).toUpperCase() + neighborhood.slice(1);
    const cross_street = [faker.address.streetName(), faker.address.streetName()].join(' and ');
    const parking = faker.lorem.sentences();
    const dining = faker.commerce.productAdjective();
    
    const cuisineCount = randRange(1, 3);
    let cuisines = [];
    for (let i = 0; i < cuisineCount; i++) {
      cuisines.push(faker.commerce.productMaterial());
    };
    cuisines = '"' + cuisines.join(', ') + '"';
    const hours = `"Monday - Friday, ${randRange(1, 12)}:00am - ${randRange(1, 12)}:00pm"`;
    const phone = faker.phone.phoneNumber();
    const website = faker.internet.url();
    const payment = '"Visa, Discover, MasterCard"';
    const dress = [faker.commerce.productAdjective(), faker.commerce.productMaterial()].join(' ');
    const chef = faker.name.findName();
    if (randRange(0, 2) === 2) {
      catering = faker.lorem.sentences();
    } else {
      catering = null;
    };
    if (randRange(0, 2) === 2) {
      private_facilities = faker.lorem.sentences();
    } else {
      private_facilities = null;
    };

    let csvData = `${restaurant_id},${address},${neighborhood},${cross_street},${parking},${dining},${cuisines},${hours},${phone},${website},${payment},${dress},${chef},${catering},${private_facilities}\n`;
    if(!file.write(csvData)) {
      await new Promise(resolve => file.once('drain', resolve));
    }
  }
  callback(process.uptime());
}

populateItems((timeForDataGeneration) => {
  console.log("Time for data generation: ", timeForDataGeneration, " seconds");
});
