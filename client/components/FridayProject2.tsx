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

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.id)
    setActivityFormState({
      ...activityFormState,
      [event.target.name]: event.target.value,
    })
    console.log(activityFormState)
  }

  const handleSumbit = (evt: FormEvent) => {
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

  if (appSnippet) {
    return (
      <div className="component-container">
        <div className="generate-button">
          <div className="generate-button-text">{`Create ${appSnippet} that uses ${reqSnippet} to help you ${boredSnippet}`}</div>
        </div>
      </div>
    )
  } else
    return (
      <div className="component-container">
        <form className="form-container" onSubmit={handleSumbit}>
          <label htmlFor="button">
            What kind of App would you like to make?
          </label>
          <select name="activity" id="button" onChange={changeHandler}>
            <option value="education">education</option>
            <option value="social">social</option>
            <option value="recreational">recreational</option>
            <option value="relaxation">relaxation</option>
            <option value="music">music</option>
            <option value="busywork">busywork</option>
            <option value="cooking">cooking</option>
            <option value="charity">charity</option>
            <option value="diy">diy</option>
          </select>
          <button className="mini-generate-button" type="submit">
            Create project
          </button>
        </form>
      </div>
    )
}

export default FridayProject2
//What kind of project do you want to select
//Dropdown: Education, Social
