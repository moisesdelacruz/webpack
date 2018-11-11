import '../css/styles.css'

import platziImg from '../img/platzi.png'

import { firstMessage, delayedMessage } from "./message"

document.write(`<h1>${firstMessage}</h1>`)
delayedMessage()

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', '50px')
img.setAttribute('height', '50px')

document.body.append(img)

console.log("Hello World, from webpack in a webpack config file");
