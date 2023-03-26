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
        const formattedFact = _.upperCase(fact)
        const reformattedFact = _.replace(formattedFact, '`', "'")
        console.log(reformattedFact)
        getCorporateBullshit()
          .then((bullshit) => {
            const formattedBullshit = _.upperCase(bullshit)
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

  // function clickHandler() {
  //   const returnedBullshit = Promise.resolve(getCorporateBullshit)
  //   const returnedFact = Promise.resolve(getUselessFact)
  //   const returnedOnTopSnippet = Promise.resolve(getWhatsOnTopSnippet)

  //   Promise.all([returnedBullshit, returnedFact, returnedOnTopSnippet])
  //     .then((promiseArray) => {
  //       console.log(returnedBullshit)
  //     })
  //     .catch((err) => console.log(err.message))
  // }

  // async function clickHandler() {
  //   const returnedBullshit = await getCorporateBullshit()
  //   const formattedBullshit = _.lowerCase(returnedBullshit)
  //   setCorporateBullshit(await formattedBullshit)

  //   const returnedFact = await getUselessFact()
  //   const formattedFact = _.lowerFirst(returnedFact)
  //   const reformattedFact = _.replace(formattedFact, '`', "'")
  //   setUselessFact(await reformattedFact)

  //   const returnedOnTopSnippet = await getWhatsOnTopSnippet()
  //   setWhatsOnTopSnippet(await returnedOnTopSnippet)
  // }

  if (whatsOnTopSnippet) {
    return (
      // I NEED TO ADD A KEYBOARD LISTENER HERE!!
      <div className="component-container">
        <button className="generate-button" onClick={clickHandler}>
          "{whatsOnTopSnippet}
          {corporateBullshit} based on the fact that {uselessFact}"
        </button>
      </div>
    )
  } else
    return (
      <>
        <div className="component-container">
          <button className="mini-generate-button" onClick={clickHandler}>
            WHATS ON TOP
          </button>
        </div>
      </>
    )
}

export default WhatsOnTop
