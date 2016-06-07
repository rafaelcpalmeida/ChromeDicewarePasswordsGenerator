var newPasswordButton = document.getElementById("newPassword");
var generatedPasswordText = document.getElementById("generatedPassword");
var numberOfWords = document.getElementById("numberOfWords");
var separatorValue = document.getElementById("separatorValue");

newPasswordButton.onclick = function() {
    chrome.runtime.sendMessage({
        type: "password",
        words: numberOfWords.value,
        separator: separatorValue.value
    }, function(response) {
        generatedPasswordText.textContent = response.password;
        generatedPasswordText.select();
    });
};