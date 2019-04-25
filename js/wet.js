const fs = require('fs')
file = fs.readFileSync('wet.json', 'utf8')
let filej = JSON.parse(file)
fetch('./wet.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
console.log(filej)

// console.log(file)