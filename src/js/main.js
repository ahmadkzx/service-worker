import { handleMessage } from './utils/communicate'
import initServiceWorker from './utils/initServiceWorker'

initServiceWorker()
navigator.serviceWorker.addEventListener('message', handleMessage)