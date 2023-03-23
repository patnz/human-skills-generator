import request from 'superagent'

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

// write api route for boredapi to feed into fridayproject
// stretch: dropdown select menu which generates diff types of projects (e.g. 'educational')
