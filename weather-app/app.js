var cityname=document.getElementById("cityname");
var btn=document.getElementById("submit");
var city=document.getElementById("city");
var sky=document.getElementById("sky");
var temp=document.getElementById("temp");
var wind=document.getElementById("wind");
var result=document.getElementById(".result");
var span=document.getElementById("icon");
var submit_button=document.getElementById("submit");
var res1=document.getElementById("res1");
API_ID = "71ab1fb5cd558982e6bec65fdb07e119"



btn.addEventListener('click',function run() {
          var text = cityname.value;
          if(text ===""){
            alert("Please enter a city.")
           return
          }
          else
          {
            console.log(text);
              fetchData(text);
          }
         
         // fetchData(text);
     
 })

function fetchData(text)
{
   // var city = cityname.value;
  // console.log(text);
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_ID}`)
    .then((res)=>res.json())
    .then(data=>{
        console.log(data)
       
        city.innerHTML=`${data.name}`;
        sky.innerHTML= "Sky condition: "+`${data.weather[0].description}`;
        temp.innerHTML= "Temperature: "+`${data.main.temp}`+"K";
        wind.innerHTML= "Wind speed: "+`${data.wind.speed}`+" m/s";
        res1.style.display="block";
    })
    
   // .then(data=>{
        
   // });
   
}

//function weather(data)
//{
    //city.innerHTML=data.name;
   
//}
//function submit(){
  
  
//}
   
//submit_button.addEventListener(onclick,sub())
//onclick.
//function sub(){
//    alert("Please enter a city.")
//}

