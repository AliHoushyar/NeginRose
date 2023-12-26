const inputElem = document.querySelector('input')

let apiData = {
    url:'https://api.openweathermap.org/data/2.5/weather?q=',
    key:'d19bf9ee57f46f85d443ece4c9de64e2'
}

function fetchData(){
    let countryValue = inputElem.value

    fetch(`${apiData.url}${countryValue}&&appid=${apiData.key}`).
        then(res => res.json())
        .then(data => {
            console.log(data);
            showData(data);
        })
}

function showData (data){
    let myDate = document.querySelector('.date')
    myDate.innerHTML = showDate()
    let cityName = document.querySelector('.city')
    cityName.innerHTML = `${data.name}, ${data.sys.country}`
    let degree = document.querySelector('.temp')
    degree.innerHTML = `${Math.floor(data.main.temp-273.15)}°c`
    let weatherElem = document.querySelector('.weather')
    weatherElem.innerHTML = `${data.weather[0].main}`
    let hiLow = document.querySelector('.hi-low')
    hiLow.innerHTML = `${Math.floor(data.main.temp_min-273.15)}°c / ${Math.floor(data.main.temp_max-273.15)}°c`
}

function showDate(){

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه"];
    let now = new Date().toLocaleDateString('fa-IR');
    return now
}

inputElem.addEventListener('keypress',(event) => {
    if(event.keyCode === 13){
        fetchData()
    }
})

    