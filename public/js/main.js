const city=document.getElementById('city')
const submitBtn=document.getElementById('submitBtn')
const citynm=document.getElementById('citynm')
const acttemp=document.getElementById('acttemp')
const weather=document.getElementById('weathericon')
const datahide=document.querySelector('.mid_layer')
//alert(acttemp.innerText)


const getTempInfo = async(ev) => {
    ev.preventDefault();
    cityval=city.value
    if (cityval ==='')
      {
       citynm.innerText='Please Enter City Before Search'
       datahide.classList.add('data_hide')
       return false;
      }  
     try {
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=7be138706b350ac959bbe38ce3b1155f`
        const response = await fetch(url);
        //console.log(response)
        let tempInfo=await response.json();
        console.log(tempInfo)

        acttemp.innerHTML=tempInfo.main.temp
        citynm.innerHTML=`${tempInfo.name}, ${tempInfo.sys.country}` 
        const tempStats= tempInfo.weather[0].main 
        alert(tempStats)
        switch (tempStats) {
          case 'Clouds':
           weather.innerHTML="<i class='fas fa-cloud' style='color:#dfe4ea'></i>"  
           break;
          case 'Rainy':
            weather.innerHTML="<i class='fas fa-rain style='color:#dfe4ea'></i>"  
            break;
          case 'Sunny':
            weather.innerHTML="<i class='fas fa-sun' style='color:#dfe4ea'></i>"  
            break;
           default :
            weather.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i>"
          }
           datahide.classList.remove('data_hide')
      }
      
      catch (error) {
        citynm.innerText='Please Enter Proper City Value'
        datahide.classList.add('data_hide')
        return false;
      } 
}

submitBtn.addEventListener('click',getTempInfo)