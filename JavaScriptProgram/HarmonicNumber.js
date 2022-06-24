var read = require("readline-sync");
var number = read.question("Please enter a number: ");

function HarmonicNumber(number)
{
    let s = 0.0;
    for (let i=1; i<=number; i++)
    {
        
        console.log("1/" + i + "+");
        s =+ 1/parseFloat(i)
    }
    console.log("sum of series till " + number + ": " + s);
}
HarmonicNumber(number);