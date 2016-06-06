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

DicewareGenerator.prototype.getRandomNumber = function() {
    return (Math.floor(Math.random() * 6) + 1).toString();
};

DicewareGenerator.prototype.getPhrase = function(numberOfWords, separator) {
    var phrase = "", j, i;

    for (j = 0; j < numberOfWords; j++) {
        var diceResult = "";

        for (i = 0; i < 5; i++) {
            diceResult += this.getRandomNumber();
        }

        phrase += wordTree.search(diceResult).value + separator;
    }

    return phrase.substr(0, (phrase.length - 1));
};