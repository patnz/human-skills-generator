import { useState, useEffect } from 'react'
import { getUselessFact } from '../apiClient'
import { getCorporateBullshit } from '../apiClient'

const _ = require('lodash')

const WhatsOnTop = () => {
  const [uselessFact, setUselessFact] = useState('')
  const [corporateBullshit, setCorporateBullshit] = useState('')

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
      <h1>Whats on Top</h1>
      <button onClick={clickHandler}>GENERATE</button>
      {uselessFact && (
        <div className="component-container">
          <h1>
            <i>
              {' '}
              "I’ve spent a lot of time recently trying to {
                corporateBullshit
              }{' '}
              based on the fact that {uselessFact}"
            </i>
            {/* I'm pretty tired today, I couldn't sleep last night thinking about
            the fact that {uselessFact} I stayed up all night, thinking about
            how to use this fact to {corporateBullshit} */}
          </h1>
        </div>
      )}
    </>
  )
}

export default WhatsOnTop
