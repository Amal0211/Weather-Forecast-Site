
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2d9fb87974mshc4bd1d0e58a4135p1b8b3ajsn38e3040bfbf0',
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

    document.addEventListener('DOMContentLoaded',()=>{
        const darkModeButton=document.querySelector("darkmodebutton");
        const currentTheme=localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute("data-theme",currentTheme);
    })
    
    darkmodebutton.addEventListener("click",()=>{
        const theme=document.documentElement.getAttribute("data-theme") === 'dark' ? "light" : "dark";
        document.documentElement.setAttribute("data-theme",theme);
        localStorage.setItem("theme",theme);
    })
    
    const getweather_coords=(position)=>{
        document.getElementById("loader").style.display="none";
    
        //fetch('https://yahoo-weather5.p.rapidapi.com/weather?lat='+`${position.coords.latitude}`+'&long='+`${position.coords.longitude}`+'&format=json&u=c',options)
        .then(response=>response.json())
        .then((response)=>{
        console.log(response)
        SunriseValue.innerHTML=response.current_observation.astronomy.sunrise
        SunsetValue.innerHTML=response.current_observation.astronomy.sunset
        city_name.innerHTML=response.location.city
        temperature.innerHTML=response.current_observation.condition.temperature
        text_1.innerHTML=response.current_observation.condition.text
        humidity.innerHTML=response.current_observation.atmosphere.humidity
        wind_speed.innerHTML=response.current_observation.wind.speed
        visibility.innerHTML=response.current_observation.atmosphere.visibility
        high_2.innerHTML=response.forecasts[0].high;
        low_2.innerHTML=response.forecasts[0].low;
        text_2.innerHTML=response.forecasts[0].text;
        high_3.innerHTML=response.forecasts[1].high;
        low_3.innerHTML=response.forecasts[1].low;
        text_3.innerHTML=response.forecasts[1].text;
        document.getElementById("loader").style.display="none";
       
    })
    .catch(err=>console.error(err));
    }
    const loca=document.getElementById("location");
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getweather_coords);
    }
    else{
        loca.innerHTML="!!Cannot Access Your Location!!";
    }


const getweatherByCity=(city)=>{
   
    city_name.innerHTML=city;
    //fetch('https://yahoo-weather5.p.rapidapi.com/weather?location='+`${city}`+'&format=json&u=c', options)
	.then(response=>response.json())
    .then((response)=>{
    console.log(response)
    SunriseValue.innerHTML=response.current_observation.astronomy.sunrise
    SunsetValue.innerHTML=response.current_observation.astronomy.sunset
    temperature.innerHTML=response.current_observation.condition.temperature
    text_1.innerHTML=response.current_observation.condition.text;
    humidity.innerHTML=response.current_observation.atmosphere.humidity
    wind_speed.innerHTML=response.current_observation.wind.speed
    visibility.innerHTML=response.current_observation.atmosphere.visibility
    high_2.innerHTML=response.forecasts[0].high;
    low_2.innerHTML=response.forecasts[0].low;
    text_2.innerHTML=response.forecasts[0].text;
    high_3.innerHTML=response.forecasts[1].high;
    low_3.innerHTML=response.forecasts[1].low;
    text_3.innerHTML=response.forecasts[1].text;
    document.getElementById("loader").style.display="none";
})
    .catch(err=>console.error(err))
}

submitbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("loader").style.display="none";
    getweatherByCity(searchbar.value);
    })





 

