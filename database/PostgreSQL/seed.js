const db = require('./index.js')

console.log('yo')
const copyFile = '/home/harrisonywu/Documents/HRImmersive/SDC/sidebar/database/GeneratedData/sample100generatedData.csv'

db.query(`COPY restaurant FROM '${copyFile}' (FORMAT CSV, DELIMITER(','), HEADER)`)
  .then(() => console.log('restaurants saved!'))
