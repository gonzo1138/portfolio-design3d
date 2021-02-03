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
function patsch(e){
    console.log(e.id);
    console.log(e.clientX);
    console.log(e.clientY);
}
/*
function down(e){
    console.log(e);
}

function up(e){
    console.log(e);
}
*/

var klick=[];

function myname(name){
    console.log("front clicked");
    console.log(name.id);
}

document.onload = function() {
    // Handle mouseover event on a shape
    var cube = document.getElementById('cube');

    cube.addEventListener('mousedown', function(event) {
        console.log("mouse down:");
        console.log(event.clientX);
        console.log(event.clientY);
        klick[0] = event.clientX;
        klick[1] = event.clientY;
    }, false);

    cube.addEventListener('mouseup', function(event) {
        console.log("mouse up:");
        console.log(event.clientX);
        console.log(event.clientY);
        klick[2] = event.clientX;
        klick[3] = event.clientY;
        console.log(klick);
        if(klick[0]==klick[2] && klick[1]==klick[3]){
            console.log("klicked!");
        }

        //klickcompare();
    }, false);
};
/*
function klickcompare(){
    if(klick[0]===klick[2] && klick[1]===klick[3]){
        console.log("klicked!");
    }
}
*/
document.addEventListener('DOMContentLoaded', function() {

    let data = document.getElementsByClassName('data');
    //data.addEventListener("click", msg);
    if(data[0].id === "nix"){
        console.log("nix is hier");
    }
});