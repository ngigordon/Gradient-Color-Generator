const body = document.querySelector("body")
const first=document.querySelector(".first")
const second=document.querySelector(".second")
const h3 = document.querySelector("h3")

function linearGradient() {
    body.style.background = `linear-gradient(to right, ${first.value}, ${second.value})`
    h3.innerHTML = body.style.background+";";
}

first.addEventListener('input',linearGradient)
second.addEventListener('input',linearGradient)
//matching the two colors
first.addEventListener("input",linearGradient())
second.addEventListener("input",linearGradient())

//to generate random numbers with a buttuon
let button = document.createElement("button")
button.appendChild(document.createTextNode("Generate Random Numbers"))
body.appendChild(button)

//generating a random rgb color
function randomColor() {
	var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ')';
  return color;
}

const getRandomColor = ()=>{
    const rndColor1 = randomColor();
    const rndColor2 = randomColor();
    console.log(rndColor1, rndColor2)
    body.style.background = `linear-gradient(to right,
         ${rndColor1},
         ${rndColor2})`
    h3.textContent = body.style.background + ";";
}
button.addEventListener("click",getRandomColor);

