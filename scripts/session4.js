//for(let i=1;i<11;i++){
 //   console.log(i);
//}

//for(let p=10;p<101;p++){
 //   console.log(p)
//}


//function multiplicationTable(x) {
   // document.write(`<h2> Multiplication table for ${x} </h2>`);
    //for(let f = 1;f <= 10; f++) {
    //    document.write(`<li> ${f} x ${x} = ${f*x} </li>`);
    //}
//}

//function multiplicationTable(){
   // let x=prompt("enter a number");
   // let start=prompt("start point");
 //   let end=prompt("end point");

   // document.write(`<h2> Multiplication talbe for ${x} </h2>`);
    //for(let i=start; i<=end; i++) {
  //      document.write(`<li> ${i} x ${x} = ${i*x}`);
//    }
//}

//Write a program that prints the numbers from 1 to 20. 

//But for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". 

//For numbers that are multiples of both 3 and 5, print "FizzBuzz".

    for(i=1; i<50; i++){
        if(i%3==0){
            console.log("Fizz");
        }
    
    console.log(i);
        if(i%3==0 && i%5==0){
            console.log("Fizzbuzz")
        }
    }