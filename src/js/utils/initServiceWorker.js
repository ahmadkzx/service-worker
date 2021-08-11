/**
 * initialize service worker
 * that func handles all sw status (installing, waiting, active)
 */
export default async function initServiceWorker() {
  return new Promise(async resolve => {
    let svcWorker
    let svcWorkerInit

    svcWorkerInit = await navigator.serviceWorker.register('../sw/index.js', { scope: '/' })

    svcWorker = svcWorkerInit.installing || svcWorkerInit.waiting || svcWorkerInit.active

    navigator.serviceWorker.addEventListener('controllerchange', () => svcWorker = navigator.serviceWorker.controller)

    resolve(svcWorker)
  })
}