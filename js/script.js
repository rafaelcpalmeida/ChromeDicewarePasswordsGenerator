var newPasswordButton = document.getElementById("newPassword");
var generatedPasswordText = document.getElementById("generatedPassword");
var numberOfWords = document.getElementById("numberOfWords");
var separatorValue = document.getElementById("separatorValue");

newPasswordButton.onclick = function() {
    let dicewareWords = document.querySelector('input[type="checkbox"]');
    chrome.runtime.sendMessage({
        type: "password",
        words: numberOfWords.value,
        separator: separatorValue.value,
        useDicewareWords: dicewareWords.checked
    }, function(response) {
        generatedPasswordText.textContent = response.password;
        generatedPasswordText.select();
    });
};