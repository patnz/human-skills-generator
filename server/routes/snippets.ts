import express from 'express'
const router = express.Router()
const _ = require('lodash')

const fs = require('node:fs/promises')

interface Snippets {
  snippets: string[]
}

router.get('/appSnippet', (req, res) => {
  fs.readFile('./client/common/appSnippets.json')
    .then((appSnippets: string) => {
      const parsedData: Snippets = JSON.parse(appSnippets)
      const rand = _.random(0, parsedData.snippets.length - 1)
      res.json(parsedData.snippets[rand])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.get('/requirementSnippet', (req, res) => {
  fs.readFile('./client/common/requirementSnippets.json')
    .then((requirementSnippets: string) => {
      const parsedData: Snippets = JSON.parse(requirementSnippets)
      const rand = _.random(0, parsedData.snippets.length - 1)
      res.json(parsedData.snippets[rand])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.get('/whatsOnTopSnippet', (req, res) => {
  fs.readFile('./client/common/whatsOnTopSnippets.json')
    .then((whatsOnTopSnippets: string) => {
      const parsedData: Snippets = JSON.parse(whatsOnTopSnippets)
      const rand = _.random(0, parsedData.snippets.length - 1)
      res.json(parsedData.snippets[rand])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
