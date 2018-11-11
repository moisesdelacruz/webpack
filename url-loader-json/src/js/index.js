import '../css/styles.css'

import platziImg from '../img/platzi.png'

import { firstMessage, delayedMessage } from "./message"
import renderToDom from './render-to-dom'

import data from './teachers.json'

document.write(`<h1>${firstMessage}</h1>`)
delayedMessage()

data.teachers.forEach((teacher) => {
  const element = document.createElement('li')
  element.textContent = teacher.name
  renderToDom(element)
})

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', '50px')
img.setAttribute('height', '50px')

renderToDom(img)

console.log("Hello World, from webpack in a webpack config file");
