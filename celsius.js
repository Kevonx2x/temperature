function celsius() {   
    var option = prompt("Select 1 (Convert to Fahrenheit) or 2 (Convert to Celsius)");
    var temperature = Number(prompt("Enter temperature: "));
    var result;

    if (option == 1) {
        result = temperature * 9/5 + 32;
    } else if (option == 2) {
        result = (temperature - 32) * 5/9;
    }

    var weatherMessage = document.getElementById("weatherMessage");

    if (result > 50) {
        weatherMessage.innerHTML = "Prepare for Hot Weather <span class='sun-icon'>☀️</span>";
    } else if (result < 50) {
        weatherMessage.innerHTML = "Prepare for Cold Weather <span class='sun-icon'>🥶</span>";
    }

    document.getElementById("celsius").innerHTML = `The conversion result is: ${result} Degrees`;
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