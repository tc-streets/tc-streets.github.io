var date = new Date()

// add a day
let today = new Date()
let proxyUrl = "https://cors-anywhere.herokuapp.com/"
let targetUrl =
    "https://api.darksky.net/forecast/4e540394c2ac1019e17605a5565fbdd2/44.8267,-93.4233"

convert = unixtimestamp => {
    // Unixtimestamp
    unixtimestamp += 6001
    // Months array
    let months_arr = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    // Convert timestamp to milliseconds
    let date = new Date(unixtimestamp * 1000)
    // Year
    let year = date.getFullYear()

    // Month
    let month = months_arr[date.getMonth()]
    let day = days[date.getDay()]
    // Day
    // let day = date.getDate()

    // Hours
    let hours = date.getHours()

    // Minutes
    let minutes = "0" + date.getMinutes()

    // Seconds
    let seconds = "0" + date.getSeconds()

    // Display date time in MM-dd-yyyy h:m:s format
    let convdataTime = day
    return convdataTime
}
// fetch(proxyUrl + targetUrl)
    fetch('./data/wet.json')
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Bad http ")
        }
    })
    .then(j => {
        k = j.daily.data.slice(0, 4)
        l = k.reduce((a, i) => {
            a.push([i.time, i.summary, i.temperatureHigh, i.temperatureLow, i.icon])
            return a
        }, [])
        myHtml = `<div id="wet"> Weather <br>Forecast<br> </div>`
        myHtml += l
            .map(
                (v, i) =>
                ` <div>${convert(v[0])}<br> high: ${Math.round(
            v[2]
          )}&#176; low: ${Math.round(v[3])}&#176;<br>${v[4]}<br><br></div>
          `
            )
            .join("")
        document.getElementById("weather").innerHTML = myHtml
    })



    .catch(err => console.log("Error", err.message))