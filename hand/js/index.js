//get rid of colon on data
let options = ""
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
});
let places = []
let pa = []
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
  ta: "Types of Asstisance",
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
  mf: "MN Family Investment Program (mfip)",
  es: "Emergency Assistance",
  sn: "Supplemental Nutrition Assistance Program (SNAP)",
  ga: "General Assistance (GA)",
  ma: "Medical Assistance (MA)",
  mp: "Minnesota Supplemental Aid (MSA)",
  ss: "Social Security",
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
    cm: "Case Management"
  },
  "Public Assistance": {
    ta: "Types of Assistance",
    ea: "Energy Assitance",
    mf: "MN Family Investment Program (mfip)",
    es: "Emergency Assistance",
    sn: "Supplemental Nutrition Assistance Program (SNAP)",
    ga: "General Assistance (GA)",
    ma: "Medical Assistance (MA)",
    mp: "Minnesota Supplemental Aid (MSA)",
    ss: "Social Security",
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
    vt: "Veterans"
  },
  "Education and Employment": {
    ed: "Education",
    jt: "Job Training",
    tw: "Temporary Work"
  },
  "Special Help and Advocacy": {
    yp: "Youth Programs",
    im: "Services for Immigrants",
    cr: "Victims of Crime and Abuse",
    la: "Legal Aid",
    pm: "Police Misconduct",
    ad: "Advocacy",
    ex: "Ex-offenders programs"
  },

  "Acknowledgements": {
    sp: "St. Stephens",
    lm: "Mission Lodge"
  }
}
// const services = require('./cat.js')
//populate slide menu
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
    html += `<li><a class="waves-effect ${p}" href="#!"> ${
      servicesMenu[f][p]
    }</a></li>`
  }
}
//populate collapsible menu
html += "</ul>"
document.getElementById("slide").innerHTML = html

let htmlC = `<ul class="collapsible">`
for (let f in servicesMenu) {
  htmlC += `

        <li>
            <div class="collapsible-header"><i class="material-icons">expand_more</i>${f}</div>
`
  for (let p in servicesMenu[f]) {
    htmlC += `<div class="collapsible-body"><span class="${p}">${
      servicesMenu[f][p]
    }</span></div>`
  }

  htmlC += "</li>"
}
htmlC += "</ul>"
document.getElementById("collapse").innerHTML = htmlC

//search on change
function filt(item) {
  // debugger
  let sear = document.getElementById("search").value.toUpperCase()
  if (
    item[0].toUpperCase().match(sear) ||
    serviceConvert[item[8]].toUpperCase().match(sear)
  ) {
    return true
  }
}

function filChar(char) {
  let cards = document.getElementById("cards")
  places = allPlaces.filter(filt)
  let str = mapper(places)
  cards.innerHTML = str
}
//generic fill card mapper
function mapper(aPlaces) {
  let p = aPlaces
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
                        <a class="myButton" style="margin-top:20px;" href="https://www.google.com/maps/search/?api=1&query=${f[0].replace(
                          /\s+/g,
                          "+"
                        )}+Minneapolis" target="_blank">Directions </a>
                        
                       <a class="myButton" style="margin-top:20px; margin-left:10px" href="http://${f[15]}" target="_blank">website </a>  
                       <a class="myButton" style="margin-top:20px; margin-left:8px"href="tel:${f[2].replace(/-/g,"")}" id="call" target="_blank">Call </a>  
                        </div>
                        

            </div>
        </div>`
    )
    .join("")
  return p
}
//menu fill by type
function filType(Aplaces, type) {
  let cards = document.getElementById("cards")
  let q
  places = Aplaces.filter(q => q[8] === type)
  let str = mapper(places)
  cards.innerHTML = str
}
// url = 'https://raw.githubusercontent.com/wither7007/handbook/master/data/data.json'
// url = "./local.json"
let url = "data.json"
let allPlaces = []
fetch(url)
  .then(resp => resp.json())
  .then(function (data) {
    allPlaces = allPlaces.concat(data)
    filType(allPlaces, "cc")
  })

for (let sc in serviceConvert) {
  let p = document.getElementsByClassName(sc)
  for (q of p) {
    q.addEventListener("click", function () {
      filType(allPlaces, sc)
    })
  }
}

function removeTop() {
  document.querySelector('.top').style.display = "none"
  document.querySelector('#second').style.height = "100vh"
}
Array.from(document.querySelectorAll('.collapsible-header')).forEach(
  ele => ele.addEventListener('click', removeTop)
)
document.getElementById('print').addEventListener('click', print)
//set date function
let now = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let day = days[now.getDay()];
let month = months[now.getMonth()];
let greeting = () => {
  var today = new Date()
  var curHr = today.getHours()

  if (curHr < 12) {
    return ('Good Morning')
  } else if (curHr < 18) {
    return ('Good Afternoon!')
  } else {
    return ('Good Evening')
  }



}
document.getElementById('today').innerHTML = `${greeting()}<br>Today is: <br>${day} ${month} ${now.getDate()}, ${now.getFullYear()}`

function print() {
  pa = []
  let line = {
    0: "---------------",
    1: "",
    2: "",
    3: "",
    4: ""
  }
  let placesSlice = places.map(x => [x[0], x[11], x[3], x[2], x[4]])
  placesSlice.forEach(x => {
    pa.push(
      x.reduce(function (acc, cur, i) {
        acc[i] = cur
        return acc
      }, {})
    )
    pa.push(line)
  })
  printJS({
    printable: pa,
    documentTitle: serviceConvert[places[0][8]],
    properties: [{
        field: "0",
        displayName: "Place",
      },
      {
        field: "1",
        displayName: "Address"
      },
      {
        field: "2",
        displayName: "Hours"
      },
      {
        field: "3",
        displayName: "Phone"
      },
      {
        field: "4",
        displayName: "Remarks"
      }
    ],
    type: "json",
    gridStyle: "border: 2px solid #3971A5;"
  }, 'tim')
}