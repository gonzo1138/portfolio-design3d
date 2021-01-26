window.onload = function(){

    var allSidesOfTheCube = document.querySelectorAll('shape');
    console.log(allSidesOfTheCube);
    allSidesOfTheCube.forEach((item)=>{
        item.addEventListener("click",function(event){
            alert(event.target.id);
        });
    });


}