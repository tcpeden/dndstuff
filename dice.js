const prompt = require('prompt');

const reRoll = function() {
    prompt.start();
    prompt.get({
        properties: {
            diceNum: {
                message: "Enter the numbered dice"
            }
        }
    }, function(err, result) {
        const diceNum = result.diceNum || 20;
        const dice = Math.ceil(Math.random() * diceNum);

        if (dice === 1) {
            console.log("Natural 1");
        } else if (dice === 20) {
            console.log("Natural 20!");
        } else {
            console.log(dice.toString());
        }

        reRoll();
    });
};

reRoll();