import './searchbox.css';
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useState } from 'react';

export default function SearchBox({updateinfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false)
    const API_URL='https://api.openweathermap.org/data/2.5/weather';
    const API_KEY= 'dc2244bf2e1d249d7b8103195e0e7c58';
    
    let GetWetherInfo = async () => {
      let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonres = await res.json();
      
      let result = {
        city: city,
        temp: jsonres.main.temp,
        tempmin: jsonres.main.temp_min,
        tempmax: jsonres.main.temp_max,
        humidity: jsonres.main.humidity,
        feelslike: jsonres.main.feels_like,
        weather: jsonres.weather[0].description,
        windspeed: jsonres.wind.speed
      };
      console.log(result);
      return result;
    }
    let handleChange=(evt)=>{
        setCity(evt.target.value)
    }
    let handleSubmit = async (evt) => {
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await GetWetherInfo();
        updateinfo(newinfo);
        }catch{
            setError(true);
            return null;
        }
        setError(false)
       
    }
    return(
        <div className="searchbox">
       <form onSubmit={handleSubmit}>
            <TextField id="city" label="city Name" onChange={handleChange} variant="outlined" required value={city}/><br /><br />
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color:'red'}}>No such place exists!</p>}
        </form>
        </div>
    )

}
