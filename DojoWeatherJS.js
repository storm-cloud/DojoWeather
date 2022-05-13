var cookie = document.querySelector(".cookiepop");

function loadingWeather(){
    
    alert("Loading weather report...")

}

function dismissCookie(){

    cookie.remove(); 

}

function changeTemp(){

    var n = document.getElementsByClassName("num").value;
    
    var val = document.getElementById("option").value;

    console.log(n);
    
    if(val=="F°"){
        
        n = ((n*(9/5))+32);
    
    } else if(val=="C°"){
        
        n = ((n-32)*(5/9)); 
    
    }

}

//Haven't found out how to get the changeTemp function to
//change the value of the num classes... 