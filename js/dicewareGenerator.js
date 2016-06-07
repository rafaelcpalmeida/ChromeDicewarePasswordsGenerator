var wordTree = new AVLTree();

var DicewareGenerator = function() {
    this.buildTree(wordTree);
};

DicewareGenerator.prototype.buildTree = function() {
    for (var word in dicewareWords) {
        if ({}.hasOwnProperty.call(dicewareWords, word)) {
            wordTree.insert(word, dicewareWords[word]);
        }
    }
};

DicewareGenerator.prototype.getRandomNumbers = function() {
    return Array.apply(null, Array(5)).map(function(x) {
        return (Math.floor(Math.random() * 6) + 1).toString();
    });
};

DicewareGenerator.prototype.getRandomWord = function(wordIndex) {
    return wordTree.search(wordIndex).value;
};

DicewareGenerator.prototype.getPhrase = function(numberOfWords, separator) {
    var numbers = Array.apply(null, Array(numberOfWords));

    for (var nmb in numbers) {
        numbers[nmb] = this.getRandomWord(this.getRandomNumbers().join(""));
    }

    return numbers.join(separator);
};