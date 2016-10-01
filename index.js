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



// Creating custom HTML Elements
// more info (https://www.w3.org/TR/custom-elements/)
class RadioButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('role', 'radio');
    this.setAttribute('tabindex', -1);
    this.setAttribute('aria-checked', false);
  }
}

window.customElements.define('radio-button', RadioButton);
