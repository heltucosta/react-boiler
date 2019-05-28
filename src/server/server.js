import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../components/App'

const server = express()
server.use(express.static('dist'))

server.get('/', (req, res) => {
  const baseTemplate = ReactDOMServer.renderToString(<App />)

  res.send(`
    <html>
      <head>
        <title>React Boiler App</title>
      </head>
      <body>
        <div id='appRoot'>${baseTemplate}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
})

server.listen(3030, () => {console.log(`React boiler app running at port 3030`)})

export default server
