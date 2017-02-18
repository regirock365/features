// Generate a random number within a range
function randomNumber(min = 0, max = 10) {
  const boundary = max + 1
  return Math.floor(Math.random() * (boundary - min)) + min
}

// Scroll to specific element on the page (smoothly)
function scrollToElement(el, time) {
  const initialY = window.scrollY
  const finalY = el.getBoundingClientRect().top + window.scrollY
  const dir = (initialY < finalY ? "down" : "up")
  const distance = Math.abs(initialY - finalY)

  if (dir === "down") {
    for (let i = initialY; i < finalY; i++) {
      const elapsedTime = i - initialY
      setTimeout(_ => window.scroll(0, i), (time / distance) * (elapsedTime))
    }
  } else if (dir === "up") {
    console.log("not yet")
  }
}

// get the source of every vide on a page
function getVideoSources(query) {
  const elements = [...document.querySelectorAll(query)]
  return elements.map(_ => _.src)
}
