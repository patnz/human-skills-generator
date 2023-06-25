import { useState, useEffect } from 'react'
import { getUselessFact } from '../apiClient'
import { getCorporateBullshit } from '../apiClient'
import { getWhatsOnTopSnippet } from '../apiClient'

const _ = require('lodash')

const WhatsOnTop = () => {
  const [uselessFact, setUselessFact] = useState('')
  const [corporateBullshit, setCorporateBullshit] = useState('')
  const [whatsOnTopSnippet, setWhatsOnTopSnippet] = useState('')
  const [loading, setLoading] = useState(false)

  async function clickHandler() {
    setLoading(true)
    return getUselessFact()
      .then((fact) => {
        // THESE LODASH METHODS ARE JUST REFORMATTING THE INCOMING DATA

        const formattedFact = _.upperCase(fact)
        const reformattedFact = _.replace(formattedFact, '`', "'")
        getCorporateBullshit()
          .then((bullshit) => {
            const formattedBullshit = _.upperCase(bullshit)
            setCorporateBullshit(formattedBullshit)
            setUselessFact(reformattedFact)
            getWhatsOnTopSnippet()
              .then((snippet) => {
                setLoading(false)
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

  if (loading) {
    return (
      <>
        <div className="component-container">
          <button className="mini-generate-button">Loading...</button>
        </div>
      </>
    )
  } else if (whatsOnTopSnippet) {
    return (
      <div className="component-container">
        <button className="generate-button" onClick={clickHandler}>
          "{whatsOnTopSnippet}
          {corporateBullshit} based on the fact that {uselessFact}"
          <p className="generate-again">{`(click to generate again)`}</p>
        </button>
      </div>
    )
  } else if (!loading)
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
