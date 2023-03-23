import express from 'express'
const router = express.Router()
const _ = require('lodash')

const fs = require('node:fs/promises')

// write interfaces for the snippets

router.get('/appSnippet', (req, res) => {
  fs.readFile('./client/common/appSnippets.json')
    .then((appSnippets) => {
      const rand = _.random(0, appSnippets.length - 1)
      res.json(appSnippets[rand])
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
