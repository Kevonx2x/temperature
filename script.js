console.log("Script")


//   Example 1
// user enter a number
var num=Number(prompt("Enter a number"))
// present a menu: x3 - x5
var option = prompt("Selct 1) num x 3 or select 2) num x 5");
var result;
//do the calculation
if(option==1){
    result=num*3;
    console.log(num + " x 3 ");
}
if(option==2){
    result=num*5;
    console.log(num + " x 5 ");
}
// present the result of the console
console.log("The result is: " + result);