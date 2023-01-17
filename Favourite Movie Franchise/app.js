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

ul.append(li)

li.innerText = "X-Men"

// Adding Elements
const span = document.querySelector("span");
span.style.color = "blue";

// Sake of security issues, you wanna use innerText
const firstListItem = document.querySelector(".list-items");
console.log(firstListItem.innerText)
console.log(firstListItem.innerHTML)
console.log(firstListItem.textContent)

// Modifying Attributes and Classes
li.setAttribute("id", "main-heading")
li.removeAttribute("id")

const title = document.querySelector("#main-heading")
console.log(title.getAttribute("id"))

li.classList.add("list-items");
li.classList.remove("list-items")
li.classList.add("list-items");
console.log(li.classList.contains("list-items"))

// Remove Elements
li.remove();

// DOM traversal

    // Parent Node Traversal
let ul2 = document.querySelector("ul")
console.log(ul2)
console.log(ul2.parentNode.parentNode)
console.log(ul2.parentElement.parentElement)

const html = document.documentElement
console.log(html)
console.log(html.parentElement)

    // Child Node Traversal
console.log(ul.childNodes)
console.log(ul2.firstChild)
console.log(ul2.lastChild)

ul2.childNodes[1].style.backgroundColor = 'blue'

console.log(ul2.previousSibling)
console.log(ul2.nextSibling)

console.log(ul2.previousElementSibling)
console.log(ul2.nextElementSibling)