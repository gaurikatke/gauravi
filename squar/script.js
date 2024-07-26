const squareArray = document.getElementsByClassName ("square");

const colors = ["#e74c3c","#8e44ad","#3498db","#e67e22","#2ecc71"];

const defaultColor = "rgba(255,255,255,0.1)";
for (const square of squareArray){
    square.addEventListener("mouseenter",()=>{
        const randomNum = parseInt(Math.random()*colors.length);

        square.style.background= colors [randomNum];

        square.style.transition = "background-color 0s ease";

        square.style.boxshadow = "0px 0px 10px"+ colors[randomNum];
    });

    square.addEventListener("mouseleave",()=>{
        square.style.backgroundColor = defaultColor;

        square.style.transition= "background-color 2s ease";
        square.style.boxshadow=""; 
    });
}