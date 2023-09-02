import { Logo, LocationSetter, TempStats, WindStats } from ".";
import { API_URLS } from "../utils/constants";
import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";

function App() {
    const [stats, setStats] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    function getWeather(lat, lon) {
        fetch(API_URLS.getByLatLon(lat, lon))
            .then((res) => res.json())
            .then((stats) => {
                setStats(stats);
                setIsLoading(false);
                return stats;
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                getWeather(position.coords.latitude, position.coords.longitude);
            },
            () => {
                let egLat = 28.61;
                let egLon = 77.21;
                getWeather(egLat, egLon);
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
                    <div className="bg-image"></div>
                    <Logo />
                    <TempStats weather={stats} />
                    <WindStats wind={stats} />
                    <LocationSetter />
                </>
            )}
        </div>
    );
}

export default App;
