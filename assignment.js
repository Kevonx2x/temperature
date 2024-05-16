var num = Number(prompt("Enter the first number"));

var num_2 = Number(prompt("Enter the second number"));

var option = prompt("1. Addition or 2. Subtraction or 3. Multiplication or 4. Division");
var result;

if(option==1){
    result=num+num_2;
    console.log(num + num_2);
}
if(option==2){
    result=num-num_2;
    console.log(num - num_2);
}
if(option==3){
    result=num*num_2;
    console.log(num * num_2);
    
}
if(option==4){
    result=num*num_2;
    console.log(num / num_2);
}

console.log(prompt("The result is: " + result));