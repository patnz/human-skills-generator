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

router.get('/requirementSnippet', (req, res) => {
  fs.readFile('./client/common/requirementSnippets.json')
    .then((requirementSnippets) => {
      const rand = _.random(0, requirementSnippets.length - 1)
      res.json(requirementSnippets[rand])
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.get('/whatsOnTopSnippet', (req, res) => {
  fs.readFile('./client/common/whatsOnTopSnippets.json')
    .then((whatsOnTopSnippets) => {
      const rand = _.random(0, whatsOnTopSnippets.length - 1)
      res.json(whatsOnTopSnippets[rand])
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
