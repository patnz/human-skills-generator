import { useState, ChangeEvent, FormEvent } from 'react'
import { getActivity, getAppSnippet, getRequirementSnippet } from '../apiClient'
const _ = require('lodash')

export function FridayProject2() {
  const [activityFormState, setActivityFormState] = useState({
    activity: '',
  })

  const [appSnippet, setAppSnippet] = useState('')
  const [reqSnippet, setReqSnippet] = useState('')
  const [boredSnippet, setBoredSnippet] = useState('')
  const [loading, setLoading] = useState(false)

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.id)
    setActivityFormState({
      ...activityFormState,
      [event.target.name]: event.target.value,
    })
    console.log(activityFormState)
  }

  const handleSubmit = (evt: FormEvent) => {
    setLoading(true)
    evt.preventDefault()
    getActivity(activityFormState.activity)
      .then((incomingBoredSnippet) => {
        const formattedBoredSnippet = _.lowerCase(incomingBoredSnippet.activity)
        setBoredSnippet(formattedBoredSnippet)
        getRequirementSnippet()
          .then((incomingReqSnippet) => {
            setReqSnippet(incomingReqSnippet)
            getAppSnippet()
              .then((incomingAppSnippet) => {
                setAppSnippet(incomingAppSnippet)
                setLoading(false)
              })
              .catch((err) => {
                console.log(err.message)
              })
          })
          .catch((err) => {
            console.log(err.message)
          })
      })
      .catch((err) => console.log(err.message))
  }

  if (loading) {
    return (
      <>
        <div className="component-container">
          <button className="mini-generate-button">Loading...</button>
        </div>
      </>
    )
  } else if (appSnippet) {
    return (
      <div className="component-container">
        <button className="generate-button" onClick={handleSubmit}>
          <div className="generate-button-text">{`Create ${appSnippet} that uses ${reqSnippet} to help you ${boredSnippet}`}</div>
          <p className="generate-again">{`(click to generate again)`}</p>
        </button>
      </div>
    )
  } else
    return (
      <div className="component-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <label htmlFor="button">
            What kind of App would you like to make?
          </label>
          <select name="activity" id="button" onChange={changeHandler}>
            <option value="education">Education</option>
            <option value="social">Social</option>
            <option value="recreational">Recreational</option>
            <option value="relaxation">Relaxation</option>
            <option value="music">Music</option>
            <option value="busywork">Busywork</option>
            <option value="cooking">Cooking</option>
            <option value="charity">Charity</option>
            <option value="diy">DIY</option>
          </select>
          <button className="mini-generate-button" type="submit">
            CREATE PROJECT
          </button>
        </form>
      </div>
    )
}

export default FridayProject2
//What kind of project do you want to select
//Dropdown: Education, Social
