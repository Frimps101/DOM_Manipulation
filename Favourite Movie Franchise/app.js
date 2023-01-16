// GetElementById()
var heading = document.getElementById("main-heading");
heading.style.color = 'red';

// GetElementByClassName()
 const listItem = document.getElementsByClassName("list-items")
// console.log(listItem)

// GetElementByTagName()
const tagName = document.getElementsByTagName("div")
console.log(tagName)

// querySelector()
const container = document.querySelector("container")
console.log(container)

// querySelectorAll ()
const divs = document.querySelector("div")
console.log(container)

for(let elem of listItem){
    elem.style.fontSize = "1rem";
}

// Creating Elements
const ul = document.querySelector("ul");
const li = document.createElement("li");
li.innerText = "X-Men"

ul.append(li)

// Adding Elements
const span = document.querySelector("span");
span.style.color = "blue";

// Sake of security issues, you wanna use innerText
const firstListItem = document.querySelector(".list-items");
console.log(firstListItem.innerText)
console.log(firstListItem.innerHTML)
console.log(firstListItem.textContent)