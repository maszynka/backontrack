console.log('Wyah initiated!');
var wrapper = document.createElement("div"); // Create Div wrapper
var span = document.createElement("span");
var spanText = document.createTextNode("Why you are visiting this website?"); // Create a text node
var input = document.createElement("Input");
span.appendChild(spanText);
input.placeholder="{Your reason}";

wrapper.appendChild(span);
wrapper.appendChild(input);
wrapper.id="wyah__wrap"; // Append the text to <li>
input.type="Text";

document.body.appendChild(wrapper); // Append <li> to <ul> with id="myList"

//Auto growing submit
var textContainer, textareaSize, input;
var autoSize = function () {
    textareaSize.innerHTML = input.value + '\n';
};

document.addEventListener('DOMContentLoaded', function() {
    textContainer = document.querySelector('.textarea-container');
    textareaSize = textContainer.querySelector('.textarea-size');
    input = textContainer.querySelector('textarea');

    autoSize();
    input.addEventListener('input', autoSize);
});
// Autogrowing submit END

//Colapse on submit

var ele = document.getElementById("xyz"); // faster than query selector
if(ele.addEventListener) {
    ele.addEventListener("submit", callback, false);
}
