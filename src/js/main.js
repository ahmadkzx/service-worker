import { handleMessage, sendMessage } from './utils/communicate'
import initServiceWorker from './utils/initServiceWorker'

initServiceWorker()
navigator.serviceWorker.addEventListener('message', handleMessage)

sendMessage('Hello SW')