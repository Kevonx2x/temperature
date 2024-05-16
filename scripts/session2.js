// get from the promt the number
// display the mult by 5

function mult(num,num1){
    // let num=prompt("Enter a number:");
    console.log(num*num1);
}

//mult(10,3);
//mult(8,2);
//mult(10,6);

//function taxCalculation(){
    //var product=prompt("Enter the products name:");//laptop
   // var price=prompt("Enter the Price");//100
   // var qty = prompt("Enter the quantity:")//2
   // const taxes = 1.08;

   // var subtotal=price*qty;//200
    //var total= subtotal*taxes;

   // console.log(product);
   // console.log(subtotal);
   // console.log(total);//216

//}

//function problem(){
  //  var num=prompt(Number("Enter the first number:"));
  //  var num1=prompt(Number("Enter the first number:"));

   // var result =num+num1;

  //  console.log("The answer you selected is:" + result)
//}

// Enter student information (name, grade101, grade102) and calculate and display the GPA

function getGPA(){

    var name=prompt("Enter the name:");
    var grade101 =Number(prompt("Enter the 101 grade"));
    var grade102 =Number(prompt("Enter the 102 grade"));

    var gpa = (grade101+grade102)/2;

    document.getElementById("studentList").innerHTML+=`<li> Name: ${name} - GPA: ${gpa} </li>`;
}

