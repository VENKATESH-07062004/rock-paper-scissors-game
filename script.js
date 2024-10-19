let intro=confirm("Shall we play rock, paper, or scissors? enter OK or Cancel.");
if(intro){
let user=prompt("Please enter rock, paper, or scissors.\nNote: Please enter correct spelling as provided here to avoid reloadings");
if(user){
    let player=user.trim().toLowerCase();
    if(player==="rock"||
    player==="paper"||player==="scissors"
    ){
        let computer=Math.floor(Math.random()*4);
        let com=computer===1?"rock":computer===2?"paper":"scissors";
        let result=player===com?"Tie game!":player==="rock"&&com==="paper"?"Computer Wins":player==="rock"&&com==="scissors"?"You Win":player==="paper"&&com==="rock"?"You Win":player==="paper"&&com==="scissors"?"Computer Wins":player==="scissors"&&com==="rock"?"Computer Wins":player==="scissors"&&com==="paper"?"You Win":"Other Options";
        alert("\nYou:  "+player+
        "\nComputer:  "+com+"\n"+
        result);
        let playAgain=confirm("Play Again?");
        playAgain?location.reload():alert("Ok, thanks for playing with us. Come Back any time we can play together.");
    }
    else
    {
        alert("You didn't enter rock, paper, scissors");
        location.reload();
    }
}
else{
    alert("I guess you changed your mind You didn't enter rock, paper,  or scissors, maybe next time we can play Thank you");
}
}
else{
    alert("Ok, Maybe next time we can play Thank you");
}
