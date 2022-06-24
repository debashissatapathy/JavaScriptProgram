var read = require("readline-sync");
var number = Number(read.question("enter a number: "));
// if(number == 0)
// {
//     console.log(number +"= Zero");  
// }
// else if (number == 1) {
//     console.log(number +"= one"); 
// } 
// else if (number == 2){
//     console.log(number +"= Two");
// }
// else if (number == 3) {
//     console.log(number +"= Three"); 
// } 
// else if (number == 4){
//     console.log(number +"= Four");
// }
// else if (number == 5) {
//     console.log(number +"= Five"); 
// } 
// else if (number == 6){
//     console.log(number +"= Six");
// }
// else if (number == 7) {
//     console.log(number +"= Seven"); 
// } 
// else if (number == 8){
//     console.log(number +"= Eight");
// }
// else {
//     console.log(number +"= Nine"); 
// } 
switch(number)
>>>>>>> NumberToWord
{
    case 0:
        console.log(number +"= Zero");
        break;
    case 1:
        console.log(number +"= one"); 
        break;
    case 2:
        console.log(number +"= Two");
        break;
    case 3:
        console.log(number +"= Three");
        break;
    case 4:
        console.log(number +"= Four");
        break;
    case 5:
        console.log(number +"= Five");
        break;
    case 6:
        console.log(number +"= Six");
        break;
    case 7:
        console.log(number +"= Seven");
        break;
    case 8:
        console.log(number +"= Eight");
        break;
    case 9:
        console.log(number +"= Nine");
        break;
    default:
        console.log("Wrong Input");
        break;

}

