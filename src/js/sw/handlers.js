/**
 * after install sw will go in waiting phase
 * until pervious sw stop and then this sw will active
 * in this function waiting phase will skip and sw will active immediately
 */
export function handleInstallEvent() {
  self.skipWaiting()
  console.log('Service Worker Installed')
}

/**
 * when sw actives if sw have nothing to do browser will stop sw
 * in this function sw will alive until all clients (tabs) detect new sw
 * @param {object} e 
 */
export function handleActivateEvent(e) {
  e.waitUntil(async () => await clients.claim())
  console.log('Service Worker Activated')
}