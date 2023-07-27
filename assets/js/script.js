
// Declares the variable to store the searched city in
var city = "";
// Other variable declarations
var searchCity = $("#search-city-input");
var searchBtn = $("#search-city-button");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidity = $("#humidity");
var currentWindSpeed = $("#wind-speed");
var sCity = [];

// Searches the city to see if it exists in the entries from the storage
function find(c) {
    for (var i=0; i < sCity.length; i++) {
        if (c.toUpperCase() === sCity[i]) {
            return -1;
        }
    }
    return 1;
} 

// Sets up the API key
var APIKey = ca61977ea6b48f3bb3cf2a1b244a79c9;

// Displays the current and future weather to the user after grabbing the city form in the input text box
function displayWeather(event) {
    event.preventDefault();
    if (searchCity.val().trim()!== "") {
        city = searchCity.val().trim();
        currentWeather(city);
    }
}

// Creates the API call
function currentWeather(city) {
    // Next this creates the url to call the data from the server
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
}