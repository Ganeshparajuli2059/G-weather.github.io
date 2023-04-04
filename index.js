myFunction1("Northampton")

document.getElementById("search-button").addEventListener("click",myFunction);

function myFunction(){
    let search=document.getElementById("search-box").value;//Northampton
    myFunction1(search)//argument
}

function myFunction1(search){//parameter
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+search+'&units=metric&appid=f50b0d3e4b04eb72034b7806fefa48f2')
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        let temp=data["main"]["temp"]
        let humidity=data["main"]["humidity"]
        let wind=data["wind"]["speed"]
        let name=data["name"]
        let country=data["sys"]["country"]
        let cloud=data["weather"][0]["description"]
        let iconValue=data["weather"][0]["icon"]
        document.getElementsByClassName("degree")[0].innerHTML=temp+"°C";
        document.getElementsByClassName("windy")[0].innerHTML=wind+"m/s";
        document.getElementsByClassName("humidity")[0].innerHTML=humidity+"%";
        document.getElementsByClassName("address")[0].innerHTML='<i class="fa-solid fa-location-dot"></i>  '+name+","+" "+country;
        document.getElementsByClassName("cloud")[0].innerHTML=cloud;
        document.getElementsByClassName("image")[0].src="https://openweathermap.org/img/wn/"+iconValue+".png";
        let currentDate = new Date().toJSON().slice(0, 10);
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date();
        let day = weekday[d.getDay()];
        document.getElementById("date").innerHTML=day+", "+currentDate
        let rain=data["rain"]["1h"];
        document.getElementById("rain").innerHTML="Rain: "+rain+"mm";
    })
    .catch(error=>document.getElementById("rain").innerHTML="N/A")
}