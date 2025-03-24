window.onload = function() {
    var howButton = document.getElementById("how");
    if (howButton) {
        howButton.onclick = function() {
            location.href = "../how/index.html";
        };
    }
    var bthButton = document.getElementById("bth");
    if (bthButton) {
        bthButton.onclick = function() {
            location.href = "../main/index.html";
        };
    }
    var thsButton = document.getElementById("ths");
    if (thsButton) {
        thsButton.onclick = function() {
            location.href = "https://github.com/Marcotrix/marcothepucci-dev";
        };
    }
    var amnButton = document.getElementById("amn");
    if (amnButton) {
        amnButton.onclick = function() {
            location.href = "https://codeberg.org/copper256/avmon-web";
        };
    }
};
