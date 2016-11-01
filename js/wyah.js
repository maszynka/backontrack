//Extension's JS has started

console.log('Wyah JS has started!');

//Checks:

var wyahExists = document.getElementById("wyah"); //Check if extensions code exists in a DOM
//var supportShadowDOM = document.head.createShadowRoot; //Check ShadowDOM support

//Wyah Init - extension's HTML injection into a DOM
function wyahInit() {
    console.log("wyah: initiated");
    // HTML string
    var shadomDomTest = '<span>ShadowDOM is not supported in your browser! <a href="http://caniuse.com/#feat=shadowdom">Check Can I use</a></span>';
    var htmlString = '<form id="wyah-form">'
                    + ' <input type="text" placeholder="Why are you here?"/>'
                    + ' <label><input id="wyah-f-minutes" type="number" placeholder="5"/>minutes</label>'
                    + '</form>';
        //+ '<span contenteditable="true">sdfsd</span>'
    // The Shadow DOM part

    var div = document.createElement('div');
    div.id = "wyah";
    // Trying to inject shadow dom
    var root = div.createShadowRoot();
    root.innerHTML = htmlString;
    // end of Shadow dom part
    //If ShadowDOm in not availavble insert in standard way with communicate
    div.innerHTML = shadomDomTest + htmlString;

    //document.body.insertBefore(div, document.body.firstChild);
    document.documentElement.appendChild(div, document.body.firstChild);
    //document.body.appendChild(div); // Append <li> to <ul> with id="myList"
}

function dissociationSwitch() {
    //if (switch==false)
    document.documentElement.classList.toggle('dissociation-prepare');
    document.documentElement.classList.toggle('dissociated');

    console.log('Class .dissociated toggled');
}
/*
function currentInput() {
    console.log('currentInput initiated')
    var focusedInput = document.getElementById("wyah-wrap").activeElement;
    //document.getElementById("wyah-wrap").addEventListener('focusin', function(e) { console.log('focusin!' + e + "\n lets check \"activeElement: " + focusedInput)});
    console.log("Currently selected: " + focusedInput);
    $('input[type="textbox"]').keyup(function(e) {
        if(e.keyCode == 13) {
            $(this).next().focus();
        }
    });
}*/

// Check: if wyah exists in a DOM

dissociationSwitch();
if (!wyahExists) {
    wyahInit();
    //currentInput();
}
else {
    console.log('Wayh already exists!');
    //Wyah was already initiated and DOM is injected
}



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
/*
var ele = document.getElementById("xyz"); // faster than query selector
if(ele.addEventListener) {
    ele.addEventListener("submit", callback, false);
}*/

/*
 TODO: Add list of websites that the code will run at every time
 TODO: Consider using shadowDOM
 */