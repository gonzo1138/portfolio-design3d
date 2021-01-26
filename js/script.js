window.onload = function(){

    var allSidesOfTheCube = document.getElementsByTagName('shape');
    console.log(allSidesOfTheCube);
    allSidesOfTheCube.forEach((item)=>{
        item.addEventListener("click",function(event){
            alert("Boom!");
        });
    });


}