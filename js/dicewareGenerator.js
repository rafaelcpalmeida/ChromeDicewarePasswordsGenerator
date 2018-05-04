var DicewareGenerator = function() { };

DicewareGenerator.prototype.getRandomNumbers = function() {
    return Array.apply(null, Array(5)).map(function(x) {
        return (Math.floor(Math.random() * 6) + 1).toString();
    });
};

DicewareGenerator.prototype.getPhrase = function(numberOfWords, separator, useDicewareWords) {
    var numbers = Array.apply(null, Array(numberOfWords));

    console.log(useDicewareWords);

    for (var nmb in numbers) {
        if ({}.hasOwnProperty.call(numbers, nmb)) {
            if(useDicewareWords) {
                numbers[nmb] = dicewareWords[this.getRandomNumbers().join("")];
            } else {
                numbers[nmb] = effWords[this.getRandomNumbers().join("")];
            }
        }
    }

    return numbers.join(separator);
};