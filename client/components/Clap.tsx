import { useState, useEffect } from 'react'
import { getClapSnippet1, getClapSnippet2 } from '../apiClient'
// api route needed

const _ = require('lodash')

const Clap = () => {
  const [clapSnippet1, setClapSnippet1] = useState('')
  const [clapSnippet2, setClapSnippet2] = useState('')

  async function clickHandler() {
    return getClapSnippet1()
      .then((snippet1) => {
        getClapSnippet2()
          .then((snippet2) => {
            setClapSnippet1(snippet1)
            setClapSnippet2(snippet2)
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  if (clapSnippet1) {
    return (
      // I NEED TO ADD A KEYBOARD LISTENER HERE!!
      <div className="component-container">
        <button className="generate-button" onClick={clickHandler}>
          <i>
            <div className="generate-button-text">
              <p>{`${clapSnippet1} ... ${clapSnippet2}`}</p>
            </div>
          </i>
          <p className="generate-again">{`(click to generate again)`}</p>
        </button>
      </div>
    )
  } else
    return (
      <>
        <div className="component-container">
          <button className="mini-generate-button" onClick={clickHandler}>
            GENERATE A CLAP IDEA
          </button>
        </div>
      </>
    )
}

export default Clap
