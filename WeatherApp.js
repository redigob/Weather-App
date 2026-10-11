const apiKey = "441e58c996cb2af74d4925e79ad09706";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=   ";

const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")

async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  var data = await response.json();
  if(searchbox.value==""){
    alert("Enter a city first")
    return
  }
  if(response.status==404){
    document.querySelector("#error").style.display="block";
    document.querySelector(".weather").style.display="none"
  }
  else{

  document.querySelector("#error").style.display="none";
  document.querySelector(".city").innerHTML = data.name 
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h" 
  if(data.weather[0].main=="Clouds"){
      document.querySelector(".weather #sign").innerHTML=`<i class="fa-solid fa-cloud"></i>`
  }
  else if(data.weather[0].main=="Mist"){
      document.querySelector(".weather #sign").innerHTML=`<i class="fa-solid fa-smog"></i>`
  }
  else if(data.weather[0].main=="Clear"){
      document.querySelector(".weather #sign").innerHTML=`<i class="fa-solid fa-sun"></i>`
  }
  else if(data.weather[0].main=="Rain"){
      document.querySelector(".weather #sign").innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`
  }
  else if(data.weather[0].main=="Drizzle"){
      document.querySelector(".weather #sign").innerHTML=`<i class="fa-solid fa-cloud-showers-water"></i>`
  }

  document.querySelector(".weather").style.display="block"
} }

searchbtn.addEventListener("click", ()=>{
      checkweather(searchbox.value)
})      
