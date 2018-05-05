var newPasswordButton = document.getElementById("newPassword");
var generatedPasswordText = document.getElementById("generatedPassword");
var numberOfWords = document.getElementById("numberOfWords");
var separatorValue = document.getElementById("separatorValue");
var light = document.getElementById("light");
var darkside = document.getElementById("darkside");


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

light.onclick = function() {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = 'light';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/style.css';
    link.media = 'all';
    head.appendChild(link);
};

darkside.onclick = function() {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = 'darkside';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/darkside.css';
    link.media = 'all';
    head.appendChild(link);
};