//concats temp google format address.json to production data.json
const fs = require('fs')
address = require('./data/address.json')
data = require('./data/data.json')
debugger
data = data.concat(address)
console.log('added following addresses')
console.log(address)
// console.log(data)
let dataP = JSON.stringify(data, null, 2)
fs.writeFileSync('./data/data.json', dataP)