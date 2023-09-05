const API_KEY = "fc92692afe95497c926151314230209";
const API_ROOT = "https://api.weatherapi.com/v1";

export const API_URLS = {
    getByLatLon: (lat, lon) =>
        `${API_ROOT}/forecast.json?key=${API_KEY}&q=${lat}, ${lon}&days=1&aqi=no&alerts=no`,
    getByCity: (cityName) =>
        `${API_ROOT}/forecast.json?key=${API_KEY}&q=${cityName}&days=1&aqi=no&alerts=no`,
};
