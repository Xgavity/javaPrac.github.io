var parent = document.getElementById("parentElement");
var child = document.getElementById("childElement");
var h1 = document.createElement("h1");
h1.innerHTML = "My First JavaScript Project";
parent.insertBefore(h1, child);