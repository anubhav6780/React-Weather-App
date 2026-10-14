import "./InfoBox.css";
import Card from '@mui/material/Card';


import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    
    const INIT_URL = "https://images.unsplash.com/photo-1616099420784-fd962b7a46fd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D" ; 
    const HOT_URL = "https://images.unsplash.com/photo-1772376378439-eb2569f547de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" ; 
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" ; 
    const RAIN_URL = "https://images.unsplash.com/photo-1620385017682-734d6e8f7718?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" ; 

    return (
        <div className="InfoBox">
            
            <div className="cardContainer">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80 ? <ThunderstormIcon/>:info.temp>15?<SunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature ={info.temp} &deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp ={info.tempMin}</p>
          <p>Max Temp = {info.tempMax}</p>
          <p>The weather can be described  as <i>{info.weather}</i> feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
  
        </div>
    )

}