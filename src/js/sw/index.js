import { handleFetchEvent } from './cache'
import { sendMessage, handleMessage } from './communicate'
import { handleInstallEvent, handleActivateEvent } from './handlers'

setEventHandlers()

/**
 * set sw event listeners
 */
function setEventHandlers() {
  self.addEventListener('message', handleMessage)
  self.addEventListener('fetch', handleFetchEvent)
  self.addEventListener('install', handleInstallEvent)
  self.addEventListener('activate', handleActivateEvent)
}

sendMessage('Hello client im new service worker')