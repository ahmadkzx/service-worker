/**
 * handle new message from sw
 * @param {*} data - message content
 */
export function handleMessage({ data }) {
  console.log('[A Message From Service Worker]: ', data)
}

/**
 * send message to service worker
 * @param {ServiceWorker} target
 * @param {*} msg 
 */
export function sendMessage(msg, target) {
  try {
    if (target) {
      target.postMessage(msg)
    } else if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage(msg)
    }

  } catch(e) {
    console.error('[Send Message To Service Worker]: ', e)
  }
}