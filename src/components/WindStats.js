import { FaWind } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";

const WindStats = ({ wind }) => {
    console.log(wind);

    return (
        <>
            <div className="category">
                Wind
                <span></span>
            </div>
            <div id="wind-container">
                <div>
                    <LuWaves />
                    &nbsp; Speed &nbsp;
                    <span
                        style={{ color: "#fc0" }}
                    >{`${wind.current.wind_kph}`}</span>
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 80 80"
                        fill="none"
                    >
                        <path
                            d="M25.4545 48.1818L13.6364 36.3636H21.8182C22.7273 15.9636 30.5091 0 40 0C47.2727 0 53.7091 9.6 56.5455 23.4545C70.4 26.2909 80 32.7273 80 40C80 46.6545 72.1091 52.4727 60.3636 55.6364L61.4182 48.2545C68.3636 46.2545 72.7273 43.3091 72.7273 40C72.7273 36.1455 66.7273 32.7273 57.7091 30.9091C58 33.7818 58.1818 36.8364 58.1818 40C58.1818 62.1091 50.0364 80 40 80C33.3455 80 27.5273 72.1091 24.3636 60.3636L31.7455 61.4182C33.7455 68.3636 36.6909 72.7273 40 72.7273C46.0364 72.7273 50.9091 58.0727 50.9091 40C50.9091 36.3636 50.7273 32.9091 50.3636 29.6364C47.0909 29.2727 43.6364 29.0909 40 29.0909L33.2364 29.3091L34.2909 22L40 21.8182C43.1636 21.8182 46.2182 22 49.0909 22.2909C47.2727 13.2727 43.8545 7.27273 40 7.27273C34.4 7.27273 29.7455 20 29.0909 36.3636H37.2727L25.4545 48.1818ZM48.1818 54.5455L36.3636 66.3636V58.1818C15.9636 57.2727 0 49.4909 0 40C0 33.3455 7.89091 27.5273 19.6364 24.3636L18.5818 31.7455C11.6364 33.7455 7.27273 36.6909 7.27273 40C7.27273 45.6 20 50.2545 36.3636 50.9091V42.7273L48.1818 54.5455Z"
                            fill="black"
                        />
                    </svg>
                    &nbsp; Deg &nbsp;
                    <span
                        style={{ color: "#fc0" }}
                    >{`${wind.current.wind_degree}`}</span>
                </div>
                {wind.current.gust_kph ? (
                    <div>
                        <FaWind /> &nbsp; Gust &nbsp;
                        <span
                            style={{ color: "#fc0" }}
                        >{`${wind.current.gust_kph}`}</span>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default WindStats;
