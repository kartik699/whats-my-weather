const LocationSetter = ({ city, getWeather }) => {
    function handleFormSubmit() {
        getWeather();
    }

    return (
        <div id="loc-box">
            <form>
                <input
                    type="text"
                    placeholder="Enter Value..."
                    defaultValue={city.city}
                    required
                    onChange={(e) => city.setCity(e.target.value)}
                />
                <button type="button" onClick={handleFormSubmit}>
                    Check Weather!
                </button>
            </form>
            <div className="instructions">Please enter your city name</div>
        </div>
    );
};

export default LocationSetter;
