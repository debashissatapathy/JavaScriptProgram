var amount = 100, won = 0, lose = 0;

function Gambling()
{
    while ((amount < 200) || (amount == 0))
    {
        let game = Math.floor(Math.random() * 2);
        if (game == 1)
        {
            amount += 1;
            won++;
        }
        else
        {
            amount -= 1;
            lose++;
        }
    }
    console.log("Number of time won: " + won);
    console.log("Number of time lose: " + lose);
    console.log("Amount: " + amount);
}
Gambling();