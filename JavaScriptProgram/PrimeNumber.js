var read = require("readline-sync");
var number = read.question("Please enter a number: ");

function PrimeNumber(number)
{
    let count=0;
    for(let i = 2;i<number;i++)
    {
        if((number%i) == 0){
            count++;
        }
    }
    if(count == 0){
        console.log("Number is Prime");
    }
    else{
        console.log("Number is not Prime!");
    }       
}  
PrimeNumber(number);