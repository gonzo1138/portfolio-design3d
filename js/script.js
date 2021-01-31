document.addEventListener('DOMContentLoaded', function() {

    let front = document.getElementById('front');

    console.log("I'm here!");
    function msg(e){
        alert("Boom!  " + e);
        console.log("I'm not here!");
    }

    front.addEventListener("click", msg);

});