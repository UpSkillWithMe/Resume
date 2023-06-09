Prism.highlightAll();
var btn = document.getElementById("btn-copy");
var codeBlock = document.querySelector("code");

// Add an event listener to the button
btn.addEventListener("click", function () {
    // Get the text content of the code block
    var code = codeBlock.textContent;

    // Copy the text to the clipboard
    if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(function () {
            btn.innerText = 'Copied!'
            setTimeout(function () {
                btn.innerText = 'Copy code!';
            }, 3000);
        }, function (err) {
            console.error('Failed to copy text: ', err);
        });
    } else {
        /* fallback code */
        var textArea = document.createElement("TEXTAREA");
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select()
        document.execCommand("copy");
        document.body.removeChild(textArea);
        btn.innerText = 'Copied!'
        setTimeout(function () {
            btn.innerText = 'Copy code';
        }, 3000);
    }
})