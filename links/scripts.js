let animIndex = 0;
//document.body.style.backgroundImage = "linear-gradient(to bottom right, #ff7300, #ffc400)";
//document.body.style.overflow = "hidden";
// background-image: linear-gradient(to bottom right, #ff7300, #ffc400);
// background-size: 100%;
// background-repeat: no-repeat;
// overflow: hidden;


var i = 0;
var txt = 'Text 1';
setTimeout(typeWriter,6000);

function typeWriter(){
    var speed = 50;
    if(i==0){
        document.getElementById("final-content").innerHTML = "";
    }
    if (i < txt.length) {
        document.getElementById("final-content").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}