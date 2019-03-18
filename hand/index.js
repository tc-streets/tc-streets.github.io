//get rid of colon on data

let serviceConvert = {
  cc: "Clothes Closet",
  me: "Meals",
  fs: "Food Shelf",
  sh: "Shelter",
  sw: "Showers",
  th: "Transitional Housing",
  ph: "Permanent Housing",
  rh: "Rental Housing",
  fu: "Furniture",
  cm: "Case Management",
  ea: "Energy Assitance",
  cl: "Community Clinics",
  hc: "Healthcare for Homeless",
  uc: "Urgent Care",
  st: "HIV & STD Testing & Treatment",
  mh: "Mental Health",
  cp: "Community Health",
  aa: "Alcolhol and Chemcial Dependency",
  de: "Dental",
  vt: "Veterans",
  ed: "Education",
  jt: "Job Training",
  tw: "Temporary Work",
  yp: "Youth Programs",
  im: "Services for Immigrants",
  cr: "Victims of Crime and Abuse",
  la: "Legal Aid",
  pm: "Police Misconduct",
  ad: "Advocacy",
  ex: "Ex-offenders programs",

}
//services for menu should be import
let servicesMenu = {
  Essentials: {
    cc: "Clothes Closet",
    me: "Meals",
    fs: "Food Shelf",
    sh: "Shelter",
    sw: "Showers",
    th: "Transitional Housing",
    ph: "Permanent Housing",
    rh: "Rental Housing",
    fu: "Furniture",
    cm: "Case Management",
  },
  "Public Assistance": {
    ea: "Energy Assitance",
  },
  "Health Care": {
    cl: "Community Clinics",
    hc: "Healthcare for Homeless",
    uc: "Urgent Care",
    st: "HIV & STD Testing & Treatment",
    mh: "Mental Health",
    cp: "Community Health",
    aa: "Alcolhol and Chemcial Dependency",
    de: "Dental",
    vt: "Veterans",
  },
  "Education and Employment": {
    ed: "Education",
    jt: "Job Training",
    tw: "Temporary Work",
  },
  "Special Help and Advocacy": {
    yp: "Youth Programs",
    im: "Services for Immigrants",
    cr: "Victims of Crime and Abuse",
    la: "Legal Aid",
    pm: "Police Misconduct",
    ad: "Advocacy",
    ex: "Ex-offenders programs"
  }
}
// const services = require('./cat.js')
let html = ` <ul id="slide-out" class="sidenav">
`
for (let f in servicesMenu) {
  html += `
    <li>
        <div class="divider"></div>
    </li>
    <li><a class="subheader">${f}</a></li>
`
  for (let p in servicesMenu[f]) {
    html += `<li><a class="waves-effect ${p}" href="#!"> ${servicesMenu[f][p] }</a></li>`
  }
}
html += "</ul>"
console.log(html)
document.getElementById('slide').innerHTML = html


//search on change
function filt(item) {
  // debugger
  sear = document.getElementById("search").value.toUpperCase()
  if (
    item[0].toUpperCase().match(sear) ||
    serviceConvert[item[8]].toUpperCase().match(sear)
  ) {
    return true
  }
}

function filChar(char) {
  cards = document.getElementById("cards")
  places = allPlaces.filter(filt)
  str = mapper(places)
  cards.innerHTML = str
}
//generic fill card mapper
function mapper(aPlaces) {
  p = aPlaces
    .map(
      f =>
      `<div class="row ${f[10] === "h" ? "special" : 3}" style="height: 95 %">
                <div class="card blue-grey darken-1 " style="height: 95%">
                    <div class="card-content white-text">
                        <span class="card-title">${f[0]}
                        </span></span>
                      Service: ${serviceConvert[f[8]]} <br>
                      Address: ${f[11]} <br>
                        Phone: ${f[2]} <br>
                        Hours: ${f[3]} <br>
                        Remarks: ${f[4]} <br>
                        <a href="https://www.google.com/maps/search/?api=1&query=${f[0].replace(
                          /\s+/g,
                          "+"
                        )}+${f[10]}" target="_blank">Directions </a> </div>

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
  str = mapper(places)
  cards.innerHTML = str
}
// url = 'https://raw.githubusercontent.com/wither7007/handbook/master/data/data.json'
// url = "./local.json"
url = "data.json"
let allPlaces = []
fetch(url)
  .then(resp => resp.json())
  .then(function (data) {
    allPlaces = allPlaces.concat(data)
    filType(allPlaces, "cc")
  })

for (let sc in serviceConvert) {
  console.log(sc)
  p = document.getElementsByClassName(sc)
  for (q of p) {
    console.log(`q is ${q} and I is ${sc}`)
    q.addEventListener("click", function () {
      filType(allPlaces, sc)
    })
  }
}