//adds google geom to noG.json
const fs = require("fs")
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAk_m-cdevec7FKQ8-zhtPcZyD3mqlavrE',
    Promise: Promise
});
k = require('/mnt/c/projects/perm/hand/data/data.json')
let last_update = parseInt(k[k.length - 1][9])
//dataNoG is parsed excel without geometry
let stUser = require('./data/noG.json')
//last_update is filter id parameter
// let last_update = 97
// const axios = require('axios')
let url = 'data.json'
// let url = 'https://raw.githubusercontent.com/wither7007/handbook/master/data/data.json'
// let stUser = []
let aa = []

// stUser = stUser.slice(60, 62)
// stUser = stUser.filter(x => x[9] > 11 && x[9] < 14)
// stUser = stUser.filter(x => x[1].match(/\(/))
stUser = stUser.filter(v => v[9] > last_update)
debugger
// console.log(stUser)
async function gets() {
    //get json data from github
    let res = await axios.get(url)
    let user = await res.data
    stUser = user
    // stuser = stuser.concat(user.slice(0, 12))
    console.log(stuser)
}

async function goog() {
    for (k in stUser) {
        debugger
        await googleMapsClient.geocode({
                //search for address from raw githum
                address: stUser[k][1] + ' minneapolis'
            })
            .asPromise()
            .then((response) => {
                resA = response.json.results[0]
                //make array to push to json data file
                resAA = ([resA.formatted_address, resA.geometry.location.lat, resA.geometry.location.lng, resA.place_id]);
            })
            .catch((err) => {
                console.log(err);
            });
        //pushing full maps location as separate array
        stUser[k] = stUser[k].concat(resAA)
    }
    debugger
    console.log('wrote')
    console.log(JSON.stringify(stUser, 2, 2))
    debugger
    fs.writeFileSync('./data/address.json', JSON.stringify(stUser, 2, 2))
}

async function go() {
    //way to get json data then loop through google maps Asychonously--probably a better way
    // await gets()
    await goog()
}
go()