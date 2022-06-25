var read = require("readline-sync");
var number = read.question("Please enter a number: ");
var OutputPalindromeAndPrime = 0, count = 0;
function Prime(number) {
    if( number==0 || number==1 )
    {
        console.log("Given number is neither prime nor Composite");
    }
    for(let i = 2;i<number;i++)
    {
        if((number%i) == 0){
            count++;
        }
    }
    if(count == 0){
        console.log(number + " is Prime");
    }
    else{
        console.log(number + " is not Prime!");
    }
  }

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
        OutputPalindromeAndPrime = final;
    }
    else
        console.log(temp + " is not a palindrome.");
        OutputPalindromeAndPrime = final;
}  
function PrimeAndPalindrome(number)
{
    if( number==0 || number==1 )
    {
        console.log("Given number is neither prime nor Composite");
    }
    for(let i = 2;i<number;i++)
    {
        if((number%i) == 0)
        {
            count++;
        }
    }
    if(count == 0){
        ;
        Palindrome(number);
        Prime(OutputPalindromeAndPrime);
        console.log(number + " is Prime and palindrome.");
    }
    else{   
    
        Palindrome(number);
        Prime(OutputPalindromeAndPrime);
        console.log(number + " is not Prime and palindrome.")
    }
}
PrimeAndPalindrome(number);