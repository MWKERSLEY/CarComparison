//http://matthewkersley.co.uk/cars.json

buttonBegin = document.getElementById('beginB');
buttonBegin.addEventListener('click', beginFunc, false);


function beginFunc() {
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https://crossorigin.me/http://matthewkersley.co.uk/cars.json", true);
    
        
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            console.log(myData);
            /*myData.length*/
            for (var i = 1;i<11;i++) {
                document.getElementById('country'+i).innerHTML = myData[i].country;
                document.getElementById('description'+i).innerHTML = "It's a car"
                    //myData[i].description;
                document.getElementById('engine'+i).innerHTML = myData[i].engine;
                document.getElementById('image'+i).innerHTML = myData[i].image;
                document.getElementById('name'+i).innerHTML = myData[i].name;
                document.getElementById('power'+i).innerHTML = myData[i].power;
                document.getElementById('top_speed'+i).innerHTML = myData[i].top_speed;
                document.getElementById('weight'+i).innerHTML = myData[i].weight;
                document.getElementById('zero_to_sixty'+i).innerHTML = myData[i].zero_to_sixty;
            }
            
        } else {
            alert("Error connecting to data! Try again later.");
        }
    }
    
    
    
    
    
    
    
    myRequest.send();
}
