

const apikey = "5298d0058384f4bcf246b30ee3e068ce";


let d = new Date();
let newDate = +d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();


const btn = document.getElementById("generate");


btn.addEventListener("click", async ()=>{
    const zipCode = document.getElementById("zip").value;
    const content = document.getElementById("feelings").value
    const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apikey}&units=imperial`)
    const data = await res.json()
    const temp =  Math.round((data.main.temp - 32) / 1.8)
    
    


    await fetch('/add',{
        method: "POST",
        credentials: "same-origin",
        headers:{
            "Content-Type":"application/json"  
        },
        body: JSON.stringify({
            date:newDate,
            temp:temp ,
            content:content
        })
    })

    const serverRes =await fetch('/data',{
        method:"GET",
        credentials: "same-origin"
        }).then(response => 
            response.json()
            ).then( (data) => {  
           ;
        document.getElementById("date").innerHTML = data.date;
        document.getElementById("temp").innerHTML = data.temp+ '&degC';
        document.getElementById("content").innerHTML = data.content;
            })
        
    
  

})
   



const updatingUI = async () => {
    
    const res = await fetch(res + "/data");
    try {
    const finalData = await res.json();

    document.getElementById("date").innerHTML = finalData.date
    document.getElementById("temp").innerHTML = finalData.temp+ '&degC';
    document.getElementById("content").innerHTML = finalData.content;

        } catch (error) {
        console.log(error);
        }
}


