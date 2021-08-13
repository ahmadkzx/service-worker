import { sendMessage } from './communicate'

/**
 * set connection status change listeners
 * offline or online
 */
export default function setConnectionListeners(sw) {
  window.addEventListener('online', () => sendConnectionStatus(sw, true))
  window.addEventListener('offline', () => sendConnectionStatus(sw, false))
}

/**
 * send connection status to sw
 * @param {boolean} status 
 */
function sendConnectionStatus(sw, status) {
  sendMessage(/*message*/ { handler: 'setConnectionStatus', data: status }, /*target*/ sw)
}