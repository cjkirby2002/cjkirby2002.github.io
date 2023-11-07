console.log("Making sure this is linked");

const x = 1;
const y = 2;

if (x==y) {
    console.log("Success");
}
else {
    console.log("fail");
}

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  });


function random(number) {
    return Math.floor(Math.random() * number);

}

function random2(number) {
    return(Math.random() + number);
}


function draw () {
    //console.log("Test");
    //ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i<600; i++) {
        ctx.beginPath();
        let red = random(255);
        let green = random(200);
        let blue = random(255);
        let alpha = random2(.7);
        let color = "rgba("+red+", "+green+", "+blue+", "+alpha+")";
        console.log(color);
        ctx.fillStyle = color;


        ctx.arc(random(canvas.width), random(canvas.height), random(20), 0, (2*Math.PI));
        ctx.fill();
    }
}



btn.addEventListener("click", draw);