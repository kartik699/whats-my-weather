import {
    FaThermometerQuarter,
    FaThermometerThreeQuarters,
} from "react-icons/fa";
import { FiThermometer } from "react-icons/fi";

const CurrTempStats = () => {
    return (
        <div id="temp-container">
            <div>
                <FaThermometerQuarter />
                <div className="curr-temp">
                    <span>26.5 °C</span>
                    <span style={{ fontSize: "32px" }}>Clouds</span>
                </div>
            </div>
            <div className="min-max">
                <FiThermometer />
                Min &nbsp; <span style={{ color: "#fc0" }}>23.2 °C</span>
            </div>
            <div className="min-max">
                <FaThermometerThreeQuarters />
                Max &nbsp; <span style={{ color: "#fc0" }}>28.7 °C</span>
            </div>
        </div>
    );
};

export default CurrTempStats;
