function celsius(){
    var temperature = Number(prompt("Enter temperature in Celsius: "));
    var fahrenheit = (temperature * 9/5) + 32;

    console.log("The result is:" + fahrenheit);

    document.getElementById("celsius").innerHTML=`The Fahrenhiet conversion is: ${fahrenheit} Degrees or ${temperature} Degrees Celsius.`

    var weatherMessage = document.getElementById("weatherMessage");
    if (fahrenheit > 50){
        weatherMessage.innerHTML = "Prepare for Hot Weather <span class='sun-icon'>☀️</span>";
    } else {
        weatherMessage.innerHTML= "Prepare for Cold Weather <span class='sun-icon'>🥶</span>";
    }

}

function login(){
    let login="japanby2028@yahoo.com";
    let pw="123password";

    let Log = prompt("Please Input Username");
    let Password = prompt("Please input Password.");

    if (login===Log && pw===Password){
        login.innerHTML= prompt("Welcome Back TJ")
    } else {
        login.innerHTML= prompt("Invalid")
    }
}