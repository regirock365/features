/*
* JS FEATURES
*/

// Creating elements in JS
let div = document.createElement('div')
let domDestination = document.getElementById('destination')
domDestination.appendChild(div)

// Adding a class to an element
let node = document.getElementById('id')
node.classList.add('class')

// Clone a dom node
let node = document.getElementById('id')
node.cloneNode(true) // true for a deep node
