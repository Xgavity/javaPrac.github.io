var div = document.getElementById("navigation");
console.log(div.className);
console.log(div.classList);
div.classList.add("name")
div.classList.add("poopy", "dodo");
console.log(div.className)

div.classList.remove("name")
div.classList.remove("poopy", "dodo");

console.log(div.classList)