var arr = [];
var Maximum = 100, Minimum = 999;
console.log("5 random digit are: ");
function randomDigit(Number)
{
    for (let i=0; i<5; i++)
    {
        arr[i] = Math.floor(Math.random() * Number);
        console.log(arr[i]);
        if (arr[i] > Maximum )
        {
            Maximum = arr[i];
        }
        if (arr[i] < Minimum)
        {
            Minimum = arr[i];
        }
    }
    
}
randomDigit(999);
console.log("Maximum of 5 random digits: ", Maximum);
console.log("Minimum of 5 random digits: ", Minimum);
