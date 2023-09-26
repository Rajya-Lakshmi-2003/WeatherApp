const apiKey = '0beea72a169b0936a57641c883d6ea08'; 

document.getElementById('search-button').addEventListener('click', () => {
    const cityInput = document.getElementById('city-input').value;
    getWeatherData(cityInput);
});

function getWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('City not found. Please enter a valid city name.');
        });
}

function displayWeather(data) {
    const cityName = document.getElementById('city-name');
    const weatherIcon = document.getElementById('weather-icon');
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('weather-description');

    cityName.textContent = data.name;
    weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
}
