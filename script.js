var istatus=document.querySelector("h5");
var changeheading=document.querySelector("#add");
var removeheading=document.querySelector("#remove");

changeheading.addEventListener("click",function(){
    istatus.innerHTML="Mesmerizing";
    istatus.style.color="green"
})
removeheading.addEventListener("click",function(){
    istatus.innerHTML="Splendid";
    istatus.style.color="red";
})


