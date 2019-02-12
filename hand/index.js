//get rid of colon on data
function stp(snip) {
  let regex = /Phone:?\s+|hours:?\s+|remarks:?"\s|"+/gi
  return snip.replace(regex, "")
}
//search on change
function filChar(char) {
  cards = document.getElementById("cards")
  sear = document.getElementById("search").value.toUpperCase()
  places = allPlaces.filter(x => x[0].toUpperCase().match(sear))
  str = mapper(places)
  // console.log(str)
  cards.innerHTML = str
}
//generic fill card mapper
function mapper(aPlaces) {
  p = aPlaces
    .map(
      f =>
      `<div class="row" style="height: 100%">
                <div class="card blue-grey darken-1" style="height: 100%">
                    <div class="card-content white-text">
                    ${f[8]}
                        <span class="card-title">${f[0]}</span>
                        Address: ${f[1]} <br>
                        Phone: ${stp(f[2])} <br>
                        Hours: ${stp(f[3])} <br>
                        Remarks: ${stp(f[4])} <br>
                    </div>
            </div>
        </div>`
    )
    .join("")
  return p
}
//menu fill by type
function filType(places, type) {
  cards = document.getElementById("cards")
  places = places.filter(q => q[8] === type)
  console.log(places)
  str = mapper(places)
  cards.innerHTML = str
}
// url = 'dum.txt'
url = "https://raw.githubusercontent.com/wither7007/hand/master/data/data.json"
let allPlaces = []
fetch(url)
  .then(resp => resp.json())
  .then(function (data) {
    allPlaces = allPlaces.concat(data)
    console.log("data from promise is", data)
    filType(allPlaces, "c")
  })
let className = document.getElementsByClassName('clothes')
Array.from(className).forEach(e =>
  e.addEventListener("click", () => filType(allPlaces, "c")))
let classNameF = document.getElementsByClassName('food')
Array.from(classNameF).forEach(e =>
  e.addEventListener("click", () => filType(allPlaces, "f")))