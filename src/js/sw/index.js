import { handleInstallEvent, handleActivateEvent } from './handlers'

setEventHandlers()

/**
 * set sw event listeners
 */
function setEventHandlers() {
  self.addEventListener('install', handleInstallEvent)
  self.addEventListener('activate', handleActivateEvent)
}