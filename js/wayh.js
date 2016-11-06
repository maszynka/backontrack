//Extension's JS has started

//console.log('wayh JS has started!');

//Checks:
var freeze = false;
var wayhExists = document.getElementById("wayh"); //Check if extensions code exists in a DOM

//Debugging
clog = function(txt, styling) {
    if (typeof styling === 'undefined') {
       console.log("%cW:"+"%c"+txt, 'background: #222; color: #badaaa; font-size: 20px;', 'background: #aaa; color: #111');
    }
    else {
        console.log("%c"+"W:"+"%c"+txt,'background: #222; color: #badaaa',styling);
    }
};

//wayh Init - extension's HTML injection into a DOM
function wayhInjectWrapper() {
    console.log("wrapper added");
    // HTML string
    var shadomDomTest = '<span>ShadowDOM is not supported in your browser! <a href="http://caniuse.com/#feat=shadowdom">Check Can I use</a></span>';
    var _htmlString = '<form id="wayh-form">'
                    + ' <input type="text" placeholder="Why are you here?"/>'
                    + ' <label><input id="wayh-f-minutes" type="number" placeholder="5"/>minutes</label>'
                    + '</form>';

    var htmlString =
          '<h1>What do I want to get from this visit?</h1>'
        + '<form id="wayh-form">'
        + ' <input type="text" placeholder="Why are you here?"/>'
        + ' <label><input id="wayh-f-minutes" type="number" placeholder="5"/>minutes</label>'
        + '</form>';
        //+ '<span contenteditable="true">sdfsd</span>'
    // The Shadow DOM part

    var div = document.createElement('div');
    div.id = "wayh";
    // Trying to inject shadow dom
    var root = div.createShadowRoot();
    root.innerHTML = htmlString;
    // end of Shadow dom part
    //If ShadowDOm in not availavble insert in standard way with communicate
    div.innerHTML += shadomDomTest;

    //document.body.insertBefore(div, document.body.firstChild);
    document.documentElement.appendChild(div, document.body);
    //document.body.appendChild(div); // Append <li> to <ul> with id="myList"
}


//Function prototype
/*
function injectShadowDOM(id, target, html) {
    this.shadomDomTest = '<span>ShadowDOM is not supported in your browser! <a href="http://caniuse.com/#feat=shadowdom">Check Can I use</a></span>';
    this.htmlString = (typeof html !== 'undefined') ? html : '<strong>This function should be used only as prototype.</strong>';

    var div = document.createElement('div');
    this.id = (typeof html !== 'undefined') ? id : "wayh";
    //Creating shadowDOM
    var root = div.createShadowRoot();
    root.innerHTML = this.htmlString;

    div.innerHTML += this.shadomDomTest; // shadowDOMTest will not be displayed if browser supports shadowDOM (htmlString)

    document.documentElement.appendChild(div, (typeof target !== 'undefined') ? target : document.body.firstChild);
    //document.body.appendChild(div); // Append <li> to <ul> with id="myList"
}
*/



function wayhAdd() {
    document.documentElement.classList.add('wayh-init', 'dissociated');
}

function wayhRemove(e) {
    if (((document.body !== event.target)||(e.propertyName !== "transform"))||(document.documentElement.classList.contains('dissociated'))) return;
    document.documentElement.classList.remove('wayh-init');
    document.body.removeEventListener("transitionend", wayhRemove, false);
}

function transitionListener() {
    var unfreezing = function(e) {
        if ((document.body !== event.target)&&(e.propertyName !== "transform")) return;
        freeze = false;
    };

    document.body.addEventListener("transitionend", unfreezing, false);
}


function classCheck() { //for debuging only

    if (document.documentElement.classList.contains('dissociated')&&(!document.documentElement.classList.contains('wayh-init'))) {
        clog('classes Error', 'background-color: red; color: black')
    } else {
        clog('classes: ' + (document.documentElement.classList.contains('wayh-init')&&'wayh-init') + ' ' + (document.documentElement.classList.contains('dissociated')&&'dissociated'));
    }
}

function dissociationSwitch() {
    transitionListener();
    if ((!document.documentElement.classList.contains('wayh-init')&&!document.documentElement.classList.contains('dissociated'))&&!freeze) {
        clog('[Adding - and freezing/]', 'color: orange');
        freeze = true;
        wayhAdd();
    }
    else if ((document.documentElement.classList.contains('wayh-init')&&document.documentElement.classList.contains('dissociated'))&&!freeze) {
        freeze = true;
        clog('[Removing classes]', 'color: purple');
        document.documentElement.classList.remove('dissociated');
        document.body.removeEventListener("transitionend", wayhRemove, false);
        document.body.addEventListener("transitionend", wayhRemove, false);
                classCheck();
        clog('[/Removing classes]', 'color: purple');
    }
    else if (freeze){
        clog('[error_1] you have to wait till animation will end');
        classCheck();
        clog('[/error_1] you have to wait till animation will end');
    }
    else if (!document.documentElement.classList.contains('wayh-init')&&document.documentElement.classList.contains('dissociated')){
        clog('[error_3] Dissociated exists, wayh-init class doesnt!', 'color: blue');
        document.documentElement.classList.remove('dissociated');
        clog('[/error_3] Dissociated exists, wayh-init class doesnt!', 'color: blue');
    }
    else {
        clog('[error_4] Unkown error', 'color: red');
        classCheck();
        clog('freeze: ' + freeze);
        clog('[/error_4] Unkown error', 'color: red');
    }



}
/*
function currentInput() {
    console.log('currentInput initiated')
    var focusedInput = document.getElementById("wayh-wrap").activeElement;
    //document.getElementById("wayh-wrap").addEventListener('focusin', function(e) { console.log('focusin!' + e + "\n lets check \"activeElement: " + focusedInput)});
    console.log("Currently selected: " + focusedInput);
    $('input[type="textbox"]').keyup(function(e) {
        if(e.keyCode == 13) {
            $(this).next().focus();
        }
    });
}*/

// Check: if wayh exists in a DOM
clog('[click ocured]');
dissociationSwitch();
if (!wayhExists) {
    wayhInjectWrapper();
    //currentInput();
}
else {
    clog('Wayh already exists!');
    //wayh was already initiated and DOM is injected
}

/*

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
}); */
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