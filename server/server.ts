import { join } from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'
import snippets from './routes/snippets'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))
server.use(cors('*' as CorsOptions))
server.use('/api/v1/snippets', snippets)

server.get('/greeting', (req, res) => {
  const greetings = ['hola', 'hi', 'hello', 'howdy']
  const index = Math.floor(Math.random() * greetings.length)
  console.log(index)
  res.json({ greeting: greetings[index] })
})

export default server
