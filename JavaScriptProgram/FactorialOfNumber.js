const read = require("readline-sync");
var number = read.question("Please enter a number: ");

function FactorialOfNumber(number)
{
    let a = 1;
    for (let i=1; i<=number; i++)
    {
        a*=i;
    }
    console.log("Factorial of " + number + " is " + a);
}
FactorialOfNumber(number);