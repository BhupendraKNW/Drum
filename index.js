var noDB=document.querySelectorAll(".drum").length;
for(let i=0; i<noDB; i++)
{

    document.querySelectorAll(".drum")[i].addEventListener("click", (e)=>{
        // alert("CLICKeD"+(i+1)); 
        // e.target.style.color="white";
        
        var btnInHtml=e.target.innerHTML;
        buttonAni(btnInHtml);
        makeSound(btnInHtml);

    });
}

document.addEventListener("keypress",function(event){
    // alert(event.key);
    buttonAni(event.key);
    makeSound(event.key);
})

function makeSound(key){
switch(key)
{
    case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case "j":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case "k":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    case "l":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;

    default: console.log(btnInHtml);
}
}

function buttonAni(curKey) {
    var activeButton = document.querySelector("." + curKey);
   
        activeButton.classList.add("pressed");
       

        //  Remove after a short delay (e.g., 100ms)
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    
   
}