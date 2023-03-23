import express from 'express'
const router = express.Router()
const _ = require('lodash')

const fs = require('node:fs/promises')

interface Snippets {
  snippets: string[]
}

router.get('/appSnippet', (req, res) => {
  fs.readFile('./client/common/appSnippets.json')
    .then((appSnippets: Snippets) => {
      const rand = _.random(0, appSnippets.snippets.length - 1)
      res.json(appSnippets.snippets[rand])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.get('/requirementSnippet', (req, res) => {
  fs.readFile('./client/common/requirementSnippets.json')
    .then((requirementSnippets: Snippets) => {
      const rand = _.random(0, requirementSnippets.snippets.length - 1)
      res.json(requirementSnippets.snippets[rand])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.get('/whatsOnTopSnippet', (req, res) => {
  fs.readFile('./client/common/whatsOnTopSnippets.json')
    .then((whatsOnTopSnippets: Snippets) => {
      const rand = _.random(0, whatsOnTopSnippets.snippets.length - 1)
      res.json(whatsOnTopSnippets.snippets[rand])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
