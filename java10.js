var h1 = document.getElementById("color");
const parent1 = h1.parentNode;
var par = document.createElement("p"); 
par.setAttribute("class", "color" );
par.textContent = "new replacement element";
parent1.replaceChild(par, h1);