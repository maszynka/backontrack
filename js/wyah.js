console.log('Wyah initiated!');
var wrapper = document.createElement("div"); // Create Div wrapper
var span = document.createElement("span");
var spanText = document.createTextNode("Why you are here?"); // Create a text node
var input = document.createElement("Input");
span.appendChild(spanText);
input.placeholder="what do you want to get from the website";

wrapper.appendChild(span);
wrapper.appendChild(input);
wrapper.id="wyah__wrap"; // Append the text to <li>
input.type="Text";

document.body.appendChild(wrapper); // Append <li> to <ul> with id="myList"