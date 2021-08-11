const PORT = 8080
const fs = require('fs')
const path = require('path')
const http = require('http')
const distPath = path.join(process.cwd(), '/dist/')

http.createServer(async (req, res) => {

  try {
    const reqUrl = (req.url === '/') ? reqUrl + 'index.html' : req.url
    const contentPath = path.join(distPath, reqUrl)
    const fileType = path.extname(contentPath)

    let contentType
    switch (fileType) {
      case '.html':
        contentType = 'text/html'
        break;
    
      case '.js':
        contentType = 'text/javascript'
        break
      
      case '.css':
        contentType = 'text/css'
        break

      case '.png':
        contentType = 'image/png'
        break
      
      case '.jpg':
        contentType = 'image/jpg'
        break

      default:
        contentType = 'text'
        break
    }

    fs.readFile(contentPath, 'utf8' , (err, content) => {

      if (err) return res.writeHead(404).end('Not found')

      res.writeHead(200, {
        'Content-Type': contentType,
        'Service-Worker-Allowed': '/'
      }).end(content, 'utf-8')
      
    })

  } catch(e) {
    console.error(e)
    res.writeHead(500).end('Server error')
  }

}).listen(PORT)

console.log(`✅ Server start on ${PORT}`)