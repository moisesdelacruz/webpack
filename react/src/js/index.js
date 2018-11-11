import { firstMessage, delayedMessage } from "./message"
import platziImg from '../img/platzi.png'
import renderToDom from './render-to-dom'
import data from './teachers.json'
import '../css/styles.css'

import React from 'react'
import { render } from 'react-dom'
import Teachers from './components/teachers'

// render react components
render(<Teachers data={data} />, document.getElementById('container'))

document.write(`<h1>${firstMessage}</h1>`)
delayedMessage()

// data.teachers.forEach((teacher) => {
//   const element = document.createElement('li')
//   element.textContent = teacher.name
//   renderToDom(element)
// })

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', '50px')
img.setAttribute('height', '50px')

renderToDom(img)

console.log("Hello World, from webpack in a webpack config file");
