var count=document.querySelectorAll(".drum").length;
for(var i=0;i<count;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
var click=this.innerHTML;
makesound(click);
ani(click);

  });
}
document.addEventListener("keypress",function(event)
{
  makesound(event.key);
  ani(event.key);
});
 function ani(current)
 {
   var class1=document.querySelector("."+current);
   class1.classList.add("pressed");
   setTimeout(function(){
     class1.classList.remove("pressed");
   },100);
 }
function makesound(key)
{
  switch(key)
  {
    case "w":var audio=new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case "a":var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    case "s":var audio=new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "d":  var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
    break;
    case "j":var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "k":var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "l":var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
  }
}
