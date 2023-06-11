Prism.highlightAll();
// var btn = document.getElementById("btn-copy");
// var codeBlock = document.querySelector("code");

// // Add an event listener to the button
// btn.addEventListener("click", function () {
//     // Get the text content of the code block
//     var code = codeBlock.textContent;

//     // Copy the text to the clipboard
//     if (navigator.clipboard) {
//         navigator.clipboard.writeText(code).then(function () {
//             btn.innerText = 'Copied!'
//             setTimeout(function () {
//                 btn.innerText = 'Copy code!';
//             }, 3000);
//         }, function (err) {
//             console.error('Failed to copy text: ', err);
//         });
//     } else {
//         /* fallback code */
//         var textArea = document.createElement("TEXTAREA");
//         textArea.value = code;
//         document.body.appendChild(textArea);
//         textArea.select()
//         document.execCommand("copy");
//         document.body.removeChild(textArea);
//         btn.innerText = 'Copied!'
//         setTimeout(function () {
//             btn.innerText = 'Copy code';
//         }, 3000);
//     }
// })

var buttons = document.querySelectorAll(".btn");
var codeBlocks = document.querySelectorAll("code");

// Add event listener to each button
buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    // Get the text content of the corresponding code block
    var code = codeBlocks[index].textContent;

    // Copy the text to the clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(function () {
        button.innerText = "Copied!";
        setTimeout(function () {
          button.innerText = "Copy Code";
        }, 3000);
      }, function (err) {
        console.error("Failed to copy text: ", err);
      });
    } else {
      /* fallback code */
      var textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      button.innerText = "Copied!";
      setTimeout(function () {
        button.innerText = "Copy Code " + (index + 1);
      }, 3000);
    }
  });
});