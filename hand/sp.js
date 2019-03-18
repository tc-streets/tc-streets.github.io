const services = require('./cat.js')
let html = ` <ul id="slide-out" class="sidenav">
`
for (let f in services) {
    html += `
    <li>
        <div class="divider"></div>
    </li>
    <li><a class="subheader">${f}</a></li>
`
    debugger
    for (let p in services[f]) {
        html += `<li><a class="waves-effect ${p}" href="#!"> ${services[f][p] }</a></li>`
    }
}
html += "</ul>"
console.log(html)
document.getElementById('slide').innerHTML = html