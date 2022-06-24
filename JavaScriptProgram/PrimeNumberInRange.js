const read = require("readline-sync");
var num1 = read.question("Enter 1st number: ");
var num2 = read.question("Enter last range number: "), flag;
console.log("Prime number " + "between " + num1 + " and " + num2 + "are: ");


for (let i=num1; i<=num2; i++)
{
    if (i == 1 || i == 0)
    continue;
    flag = 1;

    for(let j=2; j<=i/2; j++)
    {
        if ((i%j) == 0)
        {
            flag = 0;
            break;
        }       
    }
    if (flag == 1)
    {
        console.log(i + " ");
    }
}

