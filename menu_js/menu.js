const hamburger = document.getElementsByClassName("hamburger")[0];

const menu = document.getElementById("menu");

const lines = document.getElementsByClassName("lines");

let menuOpen = false

hamburger.addEventListener("click",()=>{
    if (menuOpen){
        menu.style.width = "40px";
        menuOpen = false
        hamburger.style.position ="";
        lines[0].style.rotate ="";
        lines [0].style.position ="";
        lines[1].style.display="";
        lines[2].style.rotate="";
        lines[2].style.position="";
        }else{
            menu.style.width="200px";
            menuOpen = true
            hamburger.style.position="relative";
            lines[0].style.rotate = "45deg";
            lines[0].style.position = "absolute";
            lines[1].style.display ="none";
            lines[2].style.rotate = "-45deg";
            lines[2].style.position = "absolute";
        }
})