import { useState, useEffect } from 'react'
import { getUselessFact } from '../apiClient'
import { getCorporateBullshit } from '../apiClient'
import { getWhatsOnTopSnippet } from '../apiClient'

const _ = require('lodash')

const WhatsOnTop = () => {
  const [uselessFact, setUselessFact] = useState('')
  const [corporateBullshit, setCorporateBullshit] = useState('')
  const [whatsOnTopSnippet, setWhatsOnTopSnippet] = useState('')

  async function clickHandler() {
    return getUselessFact()
      .then((fact) => {
        // THESE LODASH METHODS ARE JUST REFORMATTING THE INCOMING DATA
        const formattedFact = _.lowerFirst(fact)
        const reformattedFact = _.replace(formattedFact, '`', "'")
        console.log(reformattedFact)
        getCorporateBullshit()
          .then((bullshit) => {
            const formattedBullshit = _.lowerCase(bullshit)
            setCorporateBullshit(formattedBullshit)
            console.log(formattedBullshit)
            setUselessFact(reformattedFact)
            getWhatsOnTopSnippet()
              .then((snippet) => {
                setWhatsOnTopSnippet(snippet)
              })
              .catch((err) => {
                err.message
              })
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div className="component-container">
        <h1>Whats on Top</h1>
        <button onClick={clickHandler}>GENERATE</button>
      </div>
      {whatsOnTopSnippet && (
        <div className="component-container">
          <h1>
            <i>
              "{whatsOnTopSnippet}
              {corporateBullshit} based on the fact that {uselessFact}"
            </i>
          </h1>
        </div>
      )}
    </>
  )
}

export default WhatsOnTop
