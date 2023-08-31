import Logo from "./Logo";
import TempStats from "./TempStats";
import WindStats from "./WindStats";
// import { useEffect, useState } from "react";

function App() {
    // const [location, setLocation] = useState(null);

    // useEffect(() => {
    //     navigator.geolocation.watchPosition((position) => {
    //         setLocation(position);
    //         console.log("latitude: " + position.coords.latitude);
    //         console.log("longitude: " + position.coords.longitude);
    //     });
    // }, [location]);

    return (
        <div className="App">
            <div className="bg-image"></div>
            <Logo />
            <TempStats />
            <WindStats />
        </div>
    );
}

export default App;
