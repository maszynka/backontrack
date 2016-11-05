//Extension's JS has started

//console.log('wayh JS has started!');

//Checks:

var anim = false, freeze= false;
var i = 0, i2=0 , i3=0;
var wayhExists = document.getElementById("wayh"); //Check if extensions code exists in a DOM
//var supportShadowDOM = document.head.createShadowRoot; //Check ShadowDOM support

//Debugging
clog = function(txt, styling) {
    if (typeof styling === 'undefined') {
       console.log(txt);
    }
    else {
        console.log(txt,styling);
    }
};

//wayh Init - extension's HTML injection into a DOM
function wayhInjectWrapper() {
    console.log("wayh: wrapper added");
    // HTML string
    var shadomDomTest = '<span>ShadowDOM is not supported in your browser! <a href="http://caniuse.com/#feat=shadowdom">Check Can I use</a></span>';
    var htmlString = '<form id="wayh-form">'
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
    div.innerHTML = shadomDomTest + htmlString;

    //document.body.insertBefore(div, document.body.firstChild);
    document.documentElement.appendChild(div, document.body.firstChild);
    //document.body.appendChild(div); // Append <li> to <ul> with id="myList"
}


function wayhAdd() {
    console.log('wayh:Add');
    document.documentElement.classList.add('wayh-init', 'dissociated');
}

function wayhRemove() {
    clog('wayh:Remove() - transitionEnd Event occured');
    classCheck();
    document.documentElement.classList.remove('wayh-init');
    document.body.removeEventListener("transitionend", wayhRemove, false);
    classCheck();
    clog('wayh: transitionEnd Event listener should be removed, i3: ' + i3);
    freeze = false;
}

function bodyAnimationListener() {
    document.body.addEventListener("transitionstart", function(e) {
        if (e.propertyName == "transform") {
            anim = true;
            clog('anim: ' + anim);
        }
    }, false);
    document.body.addEventListener("transitionend", function(e) {
        if (e.propertyName == "transform") {
            anim = false;


            clog('anim: ' + anim + ' i: ' + i);
            i++;
        }
    }, false);
    return anim;
}

function unfreezeOnTranslateEnd () {
    var fr=true;
    var freezing = function() {
        if (e.propertyName == "transform") {


            clog('Freeze removed ');
            document.body.removeEventListener("transitionend", freezing, false);
            fr = false
        }

    };

    document.body.addEventListener("transitionend", freezing, false);

}

function classCheck() {
    clog('wayh classes: \n' + (document.documentElement.classList.contains('wayh-init')&&'wayh-init') + ' ' + (document.documentElement.classList.contains('dissociated')&&'dissociated'));
}


function dissociationSwitch() {
    //if (switch==false)
    if (((!document.documentElement.classList.contains('wayh-init')&&!document.documentElement.classList.contains('dissociated'))&&!freeze)&&!anim) {
        clog('[Adding]');
        freeze = true;
        classCheck(); // chcecks if wayhAdd works properly
        wayhAdd();
        classCheck(); // chcecks if wayhAdd works properly

        clog('[/Adding]');
        //console.log('wayh: dissociation css injected');
    }
    else if (((document.documentElement.classList.contains('wayh-init')&&document.documentElement.classList.contains('dissociated'))&&!freeze)&&!anim) {
        clog('[Removing classes]');
        freeze = true;
        classCheck();
        document.documentElement.classList.remove('dissociated');
        clog('Class dissociated should be romoved');
        classCheck();
        clog('wayh:adding transitionend listener with wayRemove callback');
        document.body.addEventListener("transitionend", wayhRemove, false);
        clog('wayh:eventListener transisionend added ' + i2);
        //console.log('wayh: removing dissociacion effect');
        classCheck();
        clog('[/Removing classes]');
    }
    else if (freeze){
        clog('[error_1] wayh: you have to wait till animation will end');
        classCheck();
    }
    else if (bodyAnimationListener()){
        clog('[error_2] wayh: something went wrong, or you have to wait till animation will end');
        classCheck();
    }
    else if (!document.documentElement.classList.contains('wayh-init')&&document.documentElement.classList.contains('dissociated')){
        clog('[error_3] wayh: Dissociated exists, wayh-init class doesnt!')
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

dissociationSwitch();
/*if (!wayhExists) {
    wayhInjectWrapper();
    //currentInput();
}
else {
    //console.log('Wayh already exists!');
    //wayh was already initiated and DOM is injected
}
 */
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