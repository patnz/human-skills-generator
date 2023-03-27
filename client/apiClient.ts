import request from 'superagent'

export interface Activity {
  activity: string
  accessibility: number
  type: string
  participants: number
  price: number
}

export function getGreeting(): Promise<string> {
  return request.get('/greeting').then((res) => res.body.greeting)
}

export function getUselessFact(): Promise<string> {
  return request
    .get('https://uselessfacts.jsph.pl/api/v2/facts/random')
    .then((res) => res.body.text)
}

export function getCorporateBullshit(): Promise<string> {
  return request
    .get('https://corporatebs-generator.sameerkumar.website/')
    .then((res) => res.body.phrase)
}

export function getAppSnippet(): Promise<string> {
  return request.get('/api/v1/snippets/appSnippet').then((res) => res.body)
}

export function getRequirementSnippet(): Promise<string> {
  return request
    .get('/api/v1/snippets/requirementSnippet')
    .then((res) => res.body)
}

export function getWhatsOnTopSnippet(): Promise<string> {
  return request
    .get('/api/v1/snippets/whatsOnTopSnippet')
    .then((res) => res.body)
}

export function getClapSnippet1(): Promise<string> {
  return request.get('/api/v1/snippets/clapSnippet1').then((res) => res.body)
}

export function getClapSnippet2(): Promise<string> {
  return request.get('/api/v1/snippets/clapSnippet2').then((res) => res.body)
}

export function getActivity(activity: string): Promise<Activity> {
  return request
    .get(`http://www.boredapi.com/api/activity?type=${activity}`)
    .then((res) => res.body)
}

// write api route for boredapi to feed into fridayproject
// stretch: dropdown select menu which generates diff types of projects (e.g. 'educational')
