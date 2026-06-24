document.getElementById("submit").onclick = function(){
    let city = document.getElementById("input").value
    fetch("https://api.weatherapi.com/v1/current.json?key=c29ca903097241f3a46164144262206&q="+city)
    .then(function(answer){
        return answer.json()
    })
    .then(function(weather){
        let text = document.getElementById("para")
        let text2 = document.getElementById("para2")
        let text3 = document.getElementById("para3")
        let text4 = document.getElementById("para4")
        console.log(weather);
        text.textContent = "Temperature:" + weather.current.temp_c + "°C"
        text2.textContent = "Chance of rain:" + weather.current.chance_of_rain +'%' 
        text3.textContent = "Humidity:" + weather.current.humidity + "%"
        text4.textContent = "Feels like:"+ weather.current.feelslike_c + "°C"
    })}