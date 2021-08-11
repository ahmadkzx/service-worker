import { handleMessage, sendMessage } from './utils/communicate'
import initServiceWorker from './utils/initServiceWorker'

main()

async function main() {
  const svcWorker = await initServiceWorker()
  navigator.serviceWorker.addEventListener('message', handleMessage)

  sendMessage(/*target*/ svcWorker, /*message*/ 'Hello SW')
}