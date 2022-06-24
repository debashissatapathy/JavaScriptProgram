var power = require("readline-sync");
var number = power.question("Please enter the number: ");

function PowerOf2(number)
{
    for (let i=0; i<=number; i++)
    {
        let a = Math.pow(2,i);
        console.table("2 to the power " + i + "= " + a);
    }
}
PowerOf2(number);