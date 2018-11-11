import renderToDOM from './render-to-dom'
import makeMessage from './make-message'

const waitTime = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('3 seconds have passed');
  }, 3000)
})

module.exports = {
  firstMessage: 'Hello world from a module',
  delayedMessage: async () => {
    const message = await waitTime;
    renderToDOM(makeMessage(message))
  }
}
