var wordTree = new AVLTree();

for (word in dicewareWords) {
    wordTree.insert(word, dicewareWords[word]);
}

var diceResult = "";
var phrase = "";

for(i = 0; i<5; i++) {
    diceResult += (Math.floor(Math.random() * 6) + 1).toString();
}

phrase += wordTree.search(diceResult).value + " ";

diceResult = "";

for(i = 0; i<5; i++) {
    diceResult += (Math.floor(Math.random() * 6) + 1).toString();
}

phrase += wordTree.search(diceResult).value + " ";

diceResult = "";

for(i = 0; i<5; i++) {
    diceResult += (Math.floor(Math.random() * 6) + 1).toString();
}

phrase += wordTree.search(diceResult).value + " ";

diceResult = "";

for(i = 0; i<5; i++) {
    diceResult += (Math.floor(Math.random() * 6) + 1).toString();
}

phrase += wordTree.search(diceResult).value + " ";

diceResult = "";

for(i = 0; i<5; i++) {
    diceResult += (Math.floor(Math.random() * 6) + 1).toString();
}

phrase += wordTree.search(diceResult).value + " ";

diceResult = "";

for(i = 0; i<5; i++) {
    diceResult += (Math.floor(Math.random() * 6) + 1).toString();
}

phrase += wordTree.search(diceResult).value + " ";

console.log(phrase);