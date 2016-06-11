var DicewareGenerator = function (){
	constructor: function(dicewareWords){
		this.wordTree = new AVLTree();
		this._buildTree(dicewareWords);
	},
	
	_buildTree: function(dicewareWords){
		for( var word in dicewareWords){
			this.wordTree.insert( word, dicewareWords[word] );
		}
	},
	
	_getRandomNumber: function(){
		number = Math.floor(Math.random() * 6) + 1;
		return number.toString();
	},
	
	_getRandomNumbers: function(){
		digits = Array.apply(null, Array(5)).map(function(){
			return this._getRandomNumber();
		}, this);

		return digits.join("");
	},
	
	_getRandomWord: function(){
		wordIndex = this._getRandomNumbers();
		return this.wordTree.search(wordIndex).value;
	},
	
	getPhrase: function(numberOfWords, separator){
		words = Array.apply(null, Array(numberOfWords)).map( function(x){ 
			return this._getRandomWord(); 
		}, this );

		return words.join(separator);
	}
}