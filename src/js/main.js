import initServiceWorker from './utils/initServiceWorker'
import setConnectionListeners from './utils/connectionChecker'
import { handleMessage, sendMessage } from './utils/communicate'

main()

async function main() {
  const svcWorker = await initServiceWorker()
  navigator.serviceWorker.addEventListener('message', handleMessage)

  sendMessage(/*message*/ 'Hello SW', /*target*/ svcWorker)
  setConnectionListeners(svcWorker)
}