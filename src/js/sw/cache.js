const cacheVersion = 1
const cacheName = `CACHE-${cacheVersion}`
const allowedOrigin = 'http://localhost:8080' // you should set origin with env or something like env

/**
 * respond fetch with sw
 * like set middleware between client and api
 * @param {object} e - event
 */
export function handleFetchEvent(e) {
  const reqUrl = new URL(e.request.url)
  if (e.request.method !== 'GET' || reqUrl.origin !== allowedOrigin) return

  e.respondWith(router(e.request))
}

/**
 * handle requests
 * if the request fails and cached before returns cache
 * @param {Request} req
 * @returns {Response}
 */
async function router(req) {
  const cache = await caches.open(cacheName)

  try {
    const fetchOptions = {
      method: 'GET',
      cache: 'no-store',
      credentials: 'omit',
      headers: req.headers
    }

    const res = await fetch(req.url, fetchOptions)

    if (res.ok) {
      await cache.put(req.clone(), res.clone())
      return res
    }

  } catch(e) {
    const cachedRes = await cache.match(req.clone())
    if (cachedRes) return cachedRes

    console.error('[Service Worker Router]: ', e)
  }
}