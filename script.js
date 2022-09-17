document.body.innerHTML=`
<div class="heading-container"> 
<h1>Brewerys list</h1>
<h2><img class="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWV843l9SqqZ35rN1ld5Pj7dmHPh0iBsQew&usqp=CAU"></h2>
<b><b>Enter the input field</b></b>
</div>      
<div class="form-group box1">
  <input type="text" id="text" placeholder="enter input field">
   <button onclick="getBrewreyData()" class="btn btn-primary">submit</button>     
</div>
</div>
<div id="mainContainer" class="main-container"></div>
`
//get the data
const getBreweryData=async ()=>{
    try{
       //fetch the data from api
       const data=await fetch("https://api.openbrewerydb.org/breweries");
       //change data into json format
       const brewerys=await data.json();
       mainContainer.innerHtml="";
       brewerys.forEach((brewery)=>{
        //console.log(brewery);
        displayBreweryData(brewery);
       })
    }catch (error){
        console.log(error);


    }
}
getBreweryData();

const displayBreweryData=(obj)=>{
mainContainer.innerHTML+=`
<div class="container">
   <h3 class="test">Name:<span>${obj.name}</span></h3>
   <p class="para test">Type:<span>${obj.brewery_type}</span></p>
   <p class="para test">Street:<span>${obj.street}</span></p>
   <p class="para test">city:<span>${obj.city}</span></p>
   <p class="para test">state:<span>${obj.state}</span></p>
   <p class="para test">country:<span>${obj.country}</span></p>
   <p class="para test">phone number:<span>${obj.phone}</span></p>
   <p class="para test">website:<span>${obj.website_URL}</span></p>
   </div>
` ;
}
