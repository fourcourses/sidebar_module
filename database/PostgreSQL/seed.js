const db = require('./index.js')

const numberOfEntries = 1e7;
const copyFile = '/home/harrisonywu/Documents/HRImmersive/SDC/sidebar/database/GeneratedData/generatedData.csv'


db.query(`COPY restaurants FROM '${copyFile}' (FORMAT CSV, DELIMITER(','), HEADER)`)
  .then(() => console.log(`time to seed ${numberOfEntries}: `, process.uptime()))
