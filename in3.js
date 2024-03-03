var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "9623ec19aa0d773f8e383260157c8f35";

function conversion(val){
    return (val - 273.15).toFixed(2); // Corrected conversion
} 

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descripText = data['weather'][0]['description']; // Changed variable name to avoid conflict
            var temperature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${conversion(temperature)} °C</span>`; // Corrected temperature display
            description.innerHTML = `Sky conditions: <span>${descripText}</span>`; // Corrected description display
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`;
        })
        .catch(err => alert('You entered a wrong city'));
});
