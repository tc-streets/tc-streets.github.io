const shell = require('shelljs');
const fs = require('fs')
data = fs.readFileSync('data.json', 'utf-8')
obj = JSON.parse(data)
names = obj.map(x => x[0])
u = [...new Set(names)].sort()
let search = u.slice(1, 100)
console.log(search)
debugger
let version = ""
for (eachSearch in search) {
    debugger
    console.log('xxxxxxxxxxxxxx')
    version += `${search[eachSearch]}\n `
    version += shell.exec(`ddgr "${search[eachSearch]}" minneapolis -n 1 --np  `).stdout;
}
console.log('\n\n********************************\n\n')
console.log(version)
fs.writeFileSync('websites', version)