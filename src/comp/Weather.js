import React, { useEffect, useState } from "react";
import "./css/style.css";

function Weather() {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Manali");

    useEffect( () => {
        const fetchApi = async() => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1ab6e376fbdcd4167a1088c11e295f1a`
            const response = await fetch(url);

            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        };

        fetchApi();
    }, [search] )
    return (
        <>
        <div className="circle"></div>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                        value={search}
                        className="input"
                        onChange={(event) =>{
                            setSearch(event.target.value)
                        }} />
                </div>

        {
            !city ? (
                <p className="error">404 ERROR</p>
            ) : (
                <div className="info">
                <h2 className="place">
                   {search}
                </h2>
                <h1 className="temp">
                {city.temp}°C
                </h1>
                <h3 className="tempmin_max"> Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
            </div>
            )
        }              
            </div>

            
        </>
    );
}

export default Weather;