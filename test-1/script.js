const sResult = document.getElementById("result"),
  wUrl = "https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6173&current_weather=true";

document.getElementById("checkTemperature").addEventListener("click", function() {
  fetch(wUrl)
    .then(response => response.json())
    .then(data => {
      sResult.textContent = data.current_weather.temperature + "°C";
    });
});
