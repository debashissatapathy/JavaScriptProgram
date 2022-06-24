var Heads = 0;
var Tails = 0;
for(let i=0; i<10; i++)
{
    let flip = Math.floor(Math.random() * 2);
    if (flip == 0)
    {
        console.log("Heads");
        Heads++;
    }
    else
    {
        console.log("Tails");
        Tails++;
    }
}
console.log("Total heads count is " + Heads);
console.log("Total tails count is " + Tails);

   
   