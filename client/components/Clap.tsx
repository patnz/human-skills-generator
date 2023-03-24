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

  return (
    <>
      <div className="component-container">
        <div className="buttonX">
          <button onClick={clickHandler}>GENERATE</button>
        </div>

        {clapSnippet2 && (
          <p>
            {clapSnippet1} ... {clapSnippet2}
          </p>
        )}
      </div>
    </>
  )
}

export default Clap
