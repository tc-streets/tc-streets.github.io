//transforms tab delimited excelNog to noG for address process
const fs = require('fs')
const inFileName = './data/excelNog.txt'
const outFileName = './data/noG.json'
const data = fs.readFileSync(inFileName, 'utf8')

debugger

let regex = /Phone:?\s+|hours:?\s+|"|remarks:?"\s|"+/gi
tdata = data
    .split('\r\n')
    .map(line => line.replace(regex, "").split('\t'))
// remove last stupid blank item
tdata.pop()
debugger
let dataW = JSON.stringify(tdata, null, 2)
fs.writeFileSync(outFileName, dataW)
// console.log(JSON.stringify(dataW))
console.log('wrote to ', outFileName)