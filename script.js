function computerPlay() {
     let randomNumber=Math.floor(Math.random()*3);

    if (randomNumber===0) {
        let computerPick="Rock"
        return computerPick
    }
    else if (randomNumber===1) {
        let computerPick="Paper"
        return computerPick
    }
    else {
        let computerPick="Scissors"
        return computerPick
    }
    }

