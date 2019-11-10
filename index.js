
const express = require ('express')
const app = express ()
const teams = require('./teams.json')

app.get('/teams', (request, response) => {
    response.send(teams)
})

app.get('/teams/:teamID/', (request, response) => {
    let teamRequested = teams.filter( (item) => {
    return item.teamID == request.params.teamID
  })
    response.send(teamRequested)
})

app.get('/teams/:teamID/:abbreviation/', (request, response) => {
    let teamByAbbreviation = teams.filter( (team) => {
    return team.abbreviation == request.params.abbreviation
  })  
    response.send(teamByAbbreviation)
}) 

app.all('*', (request, response) => {
    console.log({request})
    response.send('Oops, please enter correct url!')
}) 


app.listen(1337, () => {
    console.log('localhost:1337')

})