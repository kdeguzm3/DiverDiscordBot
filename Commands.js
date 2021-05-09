let hiLoGame = {
    "numberToGuess": 0,
    "numberOfAttempts": 0
}

module.exports = {
    'ping': msg => {
        msg.channel.send('pong')
    },

/*Hi Lo Game */

    'hilo': msg => {
        function reset() {
            hiLoGame.numberToGuess = Math.floor(Math.random() * 99) + 1;
            console.log(hiLoGame.numberToGuess)
            hiLoGame.numberOfAttempts = 6;
            console.log(hiLoGame.numberOfAttempts)
            msg.channel.send(`Let's play a game.
            I'm thinking of a number between 1 and 100. Try to guess it by typing 'hilo' and then your guess.
            Attempts: 6`)
        }

        console.log(hiLoGame.numberOfAttempts, hiLoGame.numberToGuess)

        if (hiLoGame.numberOfAttempts === 0 || hiLoGame.numberToGuess === 0) {
            reset()
            return
        }

        let guess = msg.content.split(' ')[1]

        if (guess < 0 || guess > 100 || guess === NaN) return msg.channel.send('You must guess a number between 1 and 100')

        if (guess < hiLoGame.numberToGuess) {
            hiLoGame.numberOfAttempts -= 1
            msg.channel.send(`Higher.  Attempts: ${hiLoGame.numberOfAttempts}`)
            if (hiLoGame.numberOfAttempts === 0) msg.channel.send(`You lost.  The number was ${hiLoGame.numberToGuess}.  Type 'hilo' to play again`)
            return
        }

        if (guess > hiLoGame.numberToGuess) {
            hiLoGame.numberOfAttempts -= 1
            msg.channel.send(`Lower.  Attempts: ${hiLoGame.numberOfAttempts}`)
            if (hiLoGame.numberOfAttempts === 0) msg.channel.send(`You lost.  The number was ${hiLoGame.numberToGuess}.  Type 'hilo' to play again`)
            return
        }

        if (guess == hiLoGame.numberToGuess) {
            msg.channel.send(`That's correct!  You win!  You had ${hiLoGame.numberOfAttempts} left.  Type 'hilo' to play again`)
            hiLoGame.numberOfAttempts = 0
        }

    }

}