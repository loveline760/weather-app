function myFunction(){
    var temperature = document.getElementById("temp").value;

// Creating a temp variable.

    // giving a condition that its sunny and temperature is between 8-24 degrees celcius.
    if (temperature >=8 && temperature <=24) {
         document.getElementById("text").innerHTML= "Wear a warm jacket and a  head warmer";
    // giving the temperature is greater and equal to 24 degrees which a pretty sunlight.
    } else if (temperature >=24) {
        document.getElementById("text").innerHTML= "Dress light, the sun's out and get ready to go to the beach";
    // giving the temperature is between 0 - 7 degrees, which is possibility for rainfall.
    } else if (temperature >=0 && temperature <=7){
        document.getElementById("text").innerHTML= "it might be rainy, wear a rain jacket and take your umbrella";
    // giving that the temperature is between -1 degrees and -15 degree which is preety cold condition.    
    } else if (temperature >=-15 && temperature <=-1){
        document.getElementById("text").innerHTML= "It's prety snowy, wear a thick warm jacket";
    //  giving the temperature is exremely cold and unbearable.
    } else if (temperature >=-200 && temperature <=-16){
        document.getElementById("text").innerHTML= "it's icy, stay indoor and stay warm";
    //  giving the temperature is invalid and not applicable.
    } else{
        document.getElementById("text").innerHTML="not a valid temperature type";
    }
}