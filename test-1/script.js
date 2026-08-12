const sResult = document.getElementById("result"),
  wUrl = "https://api.open-meteo.com/v1/forecast?latitude=44.804&longitude=20.4651&current_weather=true";

document.getElementById("checkTemperature").addEventListener("click", function() {
  fetch(wUrl)
    .then(response => response.json())
    .then(data => sResult.textContent = data.current_weather.temperature + "°C")
    .catch(error => {
      console.error("Ошибка при получении данных о температуре:", error);
      sResult.textContent = "Ошибка при получении данных";
    });
});
