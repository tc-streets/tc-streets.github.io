const fs = require('fs')
const data = fs.readFileSync('b.txt', 'utf8')
debugger
tdata = data.trim().split('\r\n').map(line => line.split('\t'))
// rdata = tdata.reduce((customers, line) => {
//     // console.log(line)
//     // customers+=line
//     debugger
//     customers=[]
//     customers.push({
//         name: line[0],
//         address: line[1],
//         phone: line[2],
//         hours: line[3]
//     })
//     return customers

// }

// , {})
// console.log(tdata)
console.log(JSON.stringify(tdata, null, 2))