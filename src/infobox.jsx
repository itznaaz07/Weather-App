import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './info.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GrainIcon from '@mui/icons-material/Grain';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
      const HOT_URL = "https://plus.unsplash.com/premium_photo-1688431299771-500da5863e91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1664910346493-e34247942295?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   //algeria,aswan,hyd
    return(
        <div className="infobox">
  
   <div className='cardcontainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.humidity > 15? HOT_URL : info.humidity <15 ? COLD_URL:'nothing'}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
            &nbsp; &nbsp;{info.humidity > 80 ? <GrainIcon/> : info.humidity > 15? <SunnyIcon/> : info.humidity <15 ? <AcUnitIcon/>:'nothing'}
      
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempmin}&deg;C</p>
          <p>Max Temp = {info.tempmax}&deg;C</p>
          <p>The Weather can be described as {info.weather} and Feels Like = {info.feelslike}&deg;C</p>
         </Typography>
      </CardContent>  
      
    </Card>
    </div>
        </div>
    )
}