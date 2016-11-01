//Extension's JS has started

console.log('Wyah JS has started!');

//Checks:

var wyahExists = document.getElementById("wyah-wrap"); //Check if extensions code exists in a DOM
//var supportShadowDOM = document.head.createShadowRoot; //Check ShadowDOM support

//Wyah Init - extension's HTML injection into a DOM
function wyahInit() {
    console.log("wyah: initiated");
    // HTML string
    var htmlString = '<form id="wyah-form">'
                    + ' <input type="text" placeholder="Why are you here?"/>'
                    + ' <label><input id="wyah-f-minutes" type="number" placeholder="5"/>minutes</label>'
                    + '</form>';
        //+ '<span contenteditable="true">sdfsd</span>'
        ;

    var div = document.createElement('div');
    div.id = "wyah-wrap";
    div.innerHTML = htmlString;
    document.body.appendChild(div); // Append <li> to <ul> with id="myList"
}

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
}

// Check: if wyah exists in a DOM

if (!wyahExists) {
    wyahInit();
    currentInput();
}
else {
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