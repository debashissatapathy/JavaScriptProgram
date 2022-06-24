var read = require("readline-sync");
const a = Number( read.question("Enter num1: "));
const b = Number( read.question("Enter num2: "));
const c = Number( read.question("Enter num3: "));
var x = a + b;
console.log(x);
var d = a + b * c;
console.log("d is: " + d);
var e = a % b + c;
console.log("e is: " + e);
var f = c + a / b;
console.log("f is: " + f);
var g = a * b + c;
console.log("g is: " + g);

if (d>e && d>f && d>g)
{
    console.log("d is maximum");     
}
else if (e>d && e>f && e>g)
{
    console.log("e is maximum");  
}
else if(f>d && f>e && f>g)
{
    console.log("f is maximum"); 
}
else
{
    console.log("g is maximum"); 
}

if (d<e && d<f && d<g)
{
    console.log("d is minimum");    
}
else if (e<d && e<f && e<g)
{
    console.log("e is minimum");  
}
else if(f<d && f<e && f<g)
{
    console.log("f is minimum"); 
}
else
{
    console.log("g is minimum"); 
}