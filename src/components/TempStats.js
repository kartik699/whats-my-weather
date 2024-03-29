import { FaThermometerThreeQuarters } from "react-icons/fa";
import { FiThermometer } from "react-icons/fi";

const TempStats = ({ weather }) => {
    return (
        <div id="temp-container">
            <div>
                <img src={weather.current.condition.icon} alt="weather icon" />
                <div className="curr-temp">
                    <span>{`${weather.current.temp_c} °C`}</span>
                    <span
                        style={{ fontSize: "32px" }}
                    >{`${weather.current.condition.text}`}</span>
                </div>
            </div>
            <div className="min-max">
                <FiThermometer />
                Min &nbsp;
                <span
                    style={{ color: "#f28500" }}
                >{`${weather.forecast.forecastday[0].day.mintemp_c} °C`}</span>
            </div>
            <div className="min-max">
                <FaThermometerThreeQuarters />
                Max &nbsp;
                <span
                    style={{ color: "#f28500" }}
                >{`${weather.forecast.forecastday[0].day.maxtemp_c} °C`}</span>
            </div>
        </div>
    );
};

export default TempStats;
