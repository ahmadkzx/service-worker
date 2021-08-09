/**
 * initialize service worker
 * that func handles all sw status (installing, waiting, active)
 */
export default async function initServiceWorker() {
  try {
    let svcWorker
    let svcWorkerInit

    svcWorkerInit = await navigator.serviceWorker.register('../sw/index.js')

    svcWorker = svcWorkerInit.installing || svcWorkerInit.waiting || svcWorkerInit.active

    navigator.serviceWorker.addEventListener('controllerchange', () => svcWorker = navigator.serviceWorker.controller)


  } catch(e) {
    console.error('[Init Service Worker Function]: ', e)
  }
}