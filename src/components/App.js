import { Logo, LocationSetter, TempStats, WindStats } from ".";
import { API_URLS } from "../utils/constants";
import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";

function App() {
    const [stats, setStats] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [city, setCity] = useState("New Delhi");

    function getWeather(lat = 28.61, lon = 77.21) {
        if (city === "New Delhi") {
            fetch(API_URLS.getByLatLon(lat, lon))
                .then((res) => res.json())
                .then((stats) => {
                    setStats(stats);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        } else {
            fetch(API_URLS.getByCity(city))
                .then((res) => res.json())
                .then((stats) => {
                    setStats(stats);
                })
                .catch((err) => console.log(err));
        }
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                getWeather(position.coords.latitude, position.coords.longitude);
            },
            () => {
                getWeather();
            }
        );
    }, []);

    return (
        <div className="App">
            {isLoading ? (
                <div className="loader">
                    <Circles
                        height="80"
                        width="80"
                        color="#fc0"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            ) : (
                <>
                    <div id="bg-image"></div>
                    <Logo />
                    <TempStats weather={stats} />
                    <WindStats wind={stats} />
                    <LocationSetter
                        getWeather={getWeather}
                        city={{ city, setCity }}
                    />
                </>
            )}
        </div>
    );
}

export default App;
