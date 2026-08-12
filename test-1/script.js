const sResult = document.getElementById("result");

document.getElementById("checkTemperature").addEventListener("click", function() {
  sResult.textContent = "Получение данных...";
  fetch('https://ipapi.co/json/').then(response => response.json())
    .then(geo => {
      const lat = geo.latitude;
      const lon = geo.longitude;
      const wUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
      return fetch(wUrl);
    })
    .then(response => response.json())
    .then(data => sResult.textContent = data.current_weather.temperature + "°C")
    .catch(error => {
      console.error("Ошибка при получении данных о температуре:", error);
      sResult.textContent = "Ошибка при получении данных";
    });
});
