window.onload = function() {
    var howButton = document.getElementById("how");
    if (howButton) {
        howButton.onclick = function() {
            location.href = "/how/index.html";
        };
    }
    var bthButton = document.getElementById("bth");
    if (bthButton) {
        bthButton.onclick = function() {
            location.href = "/index.html";
        };
    }
};