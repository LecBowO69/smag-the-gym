var icon = document.getElementById("icon");
var hole = document.getElementById("whole");

icon.onclick = function(){
    hole.classList.toggle("change");
    if(hole.classList.contains("change")){
        icon.src = "/images/moon.png";
    }
    else{
        icon.src = "/images/sun.png"
    }
}