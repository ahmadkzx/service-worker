import messageHandlers from './messageHandlers'

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
      channel.port2.onmessage = handleMessage
      return client.postMessage(msg, [ channel.port2 ])

    })
  )
}

/**
 * handle new message from client
 * if in message handler is exist handler will run
 * @param {*} data - message content
 */
export function handleMessage({ data }) {

  if (data.handler && messageHandlers[data.handler]) { // check is have handler
    messageHandlers[data.handler](data.data)
  } else {
    console.log('[A Message From Client]: ', data)
  }
  
}