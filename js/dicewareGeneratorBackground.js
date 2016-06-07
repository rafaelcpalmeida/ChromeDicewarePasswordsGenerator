var dicewareGen = new DicewareGenerator();

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "password") {
        sendResponse({
            password: dicewareGen.getPhrase(parseInt(request.words), request.separator)
        });
    }
});