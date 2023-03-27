import { useState, ChangeEvent, FormEvent } from 'react'
import { getActivity } from '../apiClient'
import { getAppSnippet } from '../apiClient'
import { getRequirementSnippet } from '../apiClient'
const _ = require('lodash')

export function FridayProject() {
  const [activityFormState, setActivityFormState] = useState({
    activity: '',
    submitted: '',
    app: '',
    requirement: '',
  })

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.id)
    setActivityFormState({
      ...activityFormState,
      [event.target.name]: event.target.value,
    })
    console.log(event.target)
  }

  const handleSumbit = (evt: FormEvent) => {
    evt.preventDefault()
    getActivity(activityFormState.activity)
      .then((returningActivity) => {
        return setActivityFormState({
          ...activityFormState,
          ['submitted']: returningActivity.activity,
        })
      })
      .catch((err) => console.log(err.message))
    getSnippets()
  }

  function getSnippets() {
    getAppSnippet()
      .then((app) => {
        return setActivityFormState({
          ...activityFormState,
          ['app']: app,
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
    getRequirementSnippet()
      .then((req) => {
        return setActivityFormState({
          ...activityFormState,
          ['requirement']: req,
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div className="form-cont">
      {/* <h1></h1> */}
      <form onSubmit={handleSumbit}>
        <label htmlFor="button"></label>
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
        <button type="submit">Create project</button>
      </form>

      {activityFormState?.submitted ? (
        <p>
          Create a React app {activityFormState.app} using a Join{' '}
          {activityFormState.requirement} that will help you{' '}
          {activityFormState.submitted}{' '}
        </p>
      ) : (
        ''
      )}

      {/* // check activity exists
  // print activity
  // Create {APPSNIPPET}(HARDCODE) USING {REQSNIPPET(HARDCODE)} THAT WILL HELP YOU {BORED API}  */}
    </div>
  )
}

export default FridayProject
//What kind of project do you want to select
//Dropdown: Education, Social
