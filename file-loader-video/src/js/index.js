import '../css/styles.css'

import platziImg from '../img/platzi.png'
import platziVideo from '../videos/que-es-core.mp4'

import { firstMessage, delayedMessage } from "./message"

document.write(`<h1>${firstMessage}</h1>`)
delayedMessage()

// img
const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', '50px')
img.setAttribute('height', '50px')

document.body.append(img)
// video
const video = document.createElement('video')
video.setAttribute('src', platziVideo)
video.setAttribute('width', 480)
video.setAttribute('autoplay', true)
video.setAttribute('controls', true)

document.body.append(video)

console.log("Hello World, from webpack in a webpack config file");
