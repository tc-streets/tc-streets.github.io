const fs = require('fs')
data = fs.readFileSync('data.json', 'utf-8')
obj = JSON.parse(data)
names = obj.map(x => x[0])
u = [...new Set(names)].sort()
debugger
fs.writeFileSync('un', u.map(x => x + '\n').join(''))
// console.log(data)