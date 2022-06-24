var read = require("readline-sync");
<<<<<<< HEAD
var number = read.question("Enter any Zero digit number: ");
if(number == 1)
=======
var number = Number(read.question("Enter any Zero digit number: "));
/*if(number == 1)
>>>>>>> TenInWord
{
    console.log(number +"= One");  
}
else if (number == 10) {
    console.log(number +"= Ten"); 
} 
else if (number == 100){
    console.log(number +"= Hundred");
}
else if (number == 1000) {
    console.log(number +"= Thousand"); 
} 
else if (number == 10000){
    console.log(number +"= Ten Thousand");
}
else if (number == 100000) {
    console.log(number +"= One Lakh"); 
} 
else if (number == 1000000){
    console.log(number +"= Ten Lakh");
}
else
{
    console.log(number +"= One Crore");
}
*/
switch(number)
{
    case 1:
        console.log(number +"= One");
        break;
    case 10:
        console.log(number +"= Ten");
        break;
    case 100:
        console.log(number +"= Hundred");
        break;
    case 1000:
        console.log(number +"= Thousand");
        break;
    case 10000:
        console.log(number +"= Ten thousand");
        break;
    case 100000:
        console.log(number +"= One Lakh");
        break;
    case 1000000:
        console.log(number +"= Ten Lakh");
        break;
    case 10000000:
        console.log(number +"= One Crore");
        break;    
    default :
        console.log("wrong Input");
        break;
}