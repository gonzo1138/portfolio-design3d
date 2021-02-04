/*
var cube;
x3dom.runtime.ready = function() {
    cube = document.getElementById('cube');
    cube.runtime.enterFrame = function(e) {
        console.log(e);
    };
//    alert("About to render something the first time");
};
 */

var klick = [];
var klickseite = "";
var content = document.getElementById('content');
var contentframe = document.getElementById('contentframe');

/*
function toggelcontent(){
    contentframe.style.display='none';
    x.style.display='none';

}
*/
function myname(object){
    //console.log(object.id + " angeklickt");
    klickseite = object.id;
}

function close(e){
    hide(contentframe);
    console.log(e);
    hide(e);
}

function hide(element){
    element.style.display = 'none';
}

function setCam(name){
    document.getElementById(name + "_cam").setAttribute('set_bind','true');
    console.log("Camera " + name + " set.")
}

function display(name){
    let contentname ="";
    if(name!==""){
        switch (name){
            case "front":
                contentname = "";   // pic
                break;
            case "right":
                contentname = "kontakt";
                break;
            case "rear":
                contentname = "";   // qr
                break;
            case "bottom":
                contentname = "projekte";
                break;
            case "left":
                contentname = "impressum";
                break;
            case "top":
                contentname = "hobbies";
                break;
            default:
        }

        console.log("i'm here... " + contentname);
        if(contentname!==""){
            console.log(contentname + " gets displayed...");
            content.innerHTML = "";
            let newContent = document.getElementById(contentname).cloneNode(true);
            newContent.style.display="block";
            newContent.className="displayed";
            newContent.ID=contentname + "-displayed";
            let newElement = document.createElement("div");
            newElement.append(newContent);
            document.getElementById("content").appendChild(newElement);
            contentframe.style.display = "flex";
            content.style.display = "flex";
        }
    }
}

document.onload = function() {

    var cube = document.getElementById('cube');
    cube.addEventListener('mousedown', function(event) {
        klick[0] = event.clientX;
        klick[1] = event.clientY;
    }, false);

    cube.addEventListener('mouseup', function(event) {
        klick[2] = event.clientX;
        klick[3] = event.clientY;

        if(klick[0]===klick[2] && klick[1]===klick[3] && klickseite!==""){
            console.log("Now that's a klick on " + klickseite + "!");
            setCam(klickseite);
            display(klickseite);
            klickseite = "";
        }
    }, false);

    var closebutton = document.getElementById('close');
    closebutton.addEventListener('click', close);
};

document.addEventListener('DOMContentLoaded', function() {



});