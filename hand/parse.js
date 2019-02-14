const fs = require('fs')
const fileName = './Serve.txt'
const data = fs.readFileSync(fileName, 'utf8')
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
let dataW = JSON.stringify(tdata, null, 2)
fs.writeFileSync('/mnt/c/projects/perm/hand/data/data.json', dataW)
console.log(JSON.stringify(dataW))
