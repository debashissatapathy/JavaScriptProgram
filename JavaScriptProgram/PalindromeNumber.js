const read = require("readline-sync");
var number = read.question("Enter a number to find palindrome: ");

function Palindrome(number)
	{
		var rem, temp, final = 0;

        temp = number;
        while(number >0)
        {
            rem = number%10;
            number = parseInt(number/10);
            final = final * 10 +rem;
        }
        if (final == temp){
            console.log(temp + " is a palindrome.")
        }
        else
            console.log(temp + " is not a palindrome.")
    }
    Palindrome(number);