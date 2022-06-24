var read = require("readline-sync");
var number = read.question("Enter any Zero digit number: ");
if(number == 1)
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