/**
 * handle new message from sw
 * @param {*} data - message content
 */
export function handleMessage({ data }) {
  console.log('[A Message From Service Worker]: ', data)
}

/**
 * send message to service worker
 * @param {*} msg 
 */
export function sendMessage(msg) {
  try {
    navigator.serviceWorker.controller.postMessage(msg)

  } catch(e) {
    console.error('[Send Message To Service Worker]: ', e)
  }
}