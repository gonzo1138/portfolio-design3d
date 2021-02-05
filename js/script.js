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

function myname(object){
    //console.log(object.id + " angeklickt");
    klickseite = object.id;
}

function setCam(name){
    document.getElementById(name + "_cam").setAttribute('set_bind','true');
    console.log("Camera " + name + " set.")
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

    var contentwrapper = document.getElementById('contentwrapper');
    var contentdiv;

    function display(name){
        let contentname = "";
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

            if(contentname!==""){
                console.log("Displaying " + contentname);
                contentdiv = document.getElementById(contentname);

                contentwrapper.classList.remove('invisible');
                contentwrapper.classList.add('visiblegrid');

                contentdiv.classList.remove('invisible');
                contentdiv.classList.add('visibleflex');

                closebutton.classList.remove('invisible');
                closebutton.classList.add('visibleflex');
            }
        }
    }

    function close(){
        contentwrapper.classList.remove('visiblegrid');
        contentwrapper.classList.add('invisible');

        contentdiv.classList.remove('visibleflex');
        contentdiv.classList.add('invisible');

        closebutton.classList.remove('visibleflex');
        closebutton.classList.add('invisible');

        console.log("all closed");
    }
/*
    var divvar=document.getElementById('hobbies');
    console.log(divvar);

    function showdiv(id){
        //var divvar=document.getElementById(id);
        console.log(divvar);
        divvar.className="vis";
        console.log(divvar);
    }
*/
};

/*
document.addEventListener('DOMContentLoaded', function() {

});
*/