// function practice(){
   // let num1=99;
    //let num2=99;
    //if(num1>num2){
   //     console.log("The num1 is greater than num2");
   // }else if(num1<num2){
   //     console.log("The num2 is greater than num1");
  //  }else{
  //      console.log("The valuues are the same.")
  //  }
//}

// Challenge: Driving License

// 1. Prompt the user to enter their age.
// 2. Use an if-else statement to determine if the person can get a driving license.
// 3. If the age is 18 or older, print "Congratulations! You can get your driving license."
// 4. If the age is less than 18, print "Sorry, you are too young to get a driving license."

//function getDriversLicense() {
   // let age = prompt("Please enter your age:");
  //  age = Number(age);  // Convert the input to a number
  //  if (age >= 18) {
  //      console.log("Congratulations! You can get your driving license.");
  //  } else {
  //      console.log("Sorry, you are too young to get a drivers license.");
  //  }
//}



// Exercise: Guess the Number Game

// 1. Generate a random number between 1 and 10 (you can use Math.random() and Math.floor()).
// 2. Ask the user to guess the number. (prompt)
// 3. Use an if-else statement to check if the user's guess is correct.
// 4. If the guess is correct, print "Congratulations! You guessed the number."
// 5. If the guess is incorrect, print "Sorry, that's not correct. The number was [generated number]".


function guessNumber(){
    
    let randomNumber=Math.floor(Math.random()*10+1);

    let userGuess=prompt("Guess the number between 1 and 10");


    if(userGuess==randomNumber) {
        document.getElementById("results").innerHTML="Congrats! You guess the number"
    }else{
        document.getElementById("results").innerHTML="Sorry, that's not correct. The number was " + randomNumber;

    }

}

let userName="newassignment@gmail.com";
let password="123assignment";

function login(){
    let unameInput = prompt("Enter your email:");
    let pw = prompt("Please enter your password:")

    if(userName===unameInput & pw===password){
        console.log("Welcome to the system:");
    }else{
        console.log("Invalid credentials");
    }
}