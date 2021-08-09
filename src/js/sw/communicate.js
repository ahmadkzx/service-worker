/**
 * send message to all clients (browser tabs)
 * @param {*} msg 
 * @returns {Promise} - send message promise
 */
export async function sendMessage(msg) {

  const allClients = await clients.matchAll({ includeUncontrolled: true }) // get all clients even this sw have not control on

  return Promise.all(
    allClients.map(client => {
      
      const channel = new MessageChannel()
      return client.postMessage(msg, [ channel.port2 ])

    })
  )
}