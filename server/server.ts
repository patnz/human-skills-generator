import { join } from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'
import snippets from './routes/snippets'

const server = express().use(
  cors({
    origin: '*',
  })
)

server.use(express.json())
server.use(express.static(join(__dirname, './public')))
server.use(cors('*' as CorsOptions))
server.use('/api/v1/snippets', snippets)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, '/public/index.html'))
})

export default server
