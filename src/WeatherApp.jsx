import { useState } from "react";
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox";
import { Margin } from "@mui/icons-material";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"wonderland",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax: 30.5,
        humidity:47,
        weather:"haze",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo) ; 
    }
    return  (
        <div style={{textAlign: "center", margin:20} }>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}