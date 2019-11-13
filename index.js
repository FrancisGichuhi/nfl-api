
const express = require ('express')
const app = express ()
const teams = require('./teams.json')
const bodyParser = require('body-parser')

app.get('/teams', (request, response) => {
    response.send(teams)
})

app.get('*/teams/:idFilter', (request, response) => {
    let specificTeam = teams.filter( (team) => {
        return team.id == request.params.idFilter
  })
    response.send(specificTeam)
})

app.get('/teams/:idFilter/:abbreviation', (request, response) => {
    let teamByAbbreviation = teams.filter( (team) => {
        return team.abbreviation == request.params.abbreviation
  })  
    response.send(teamByAbbreviation)
}) 

app.post('/teams', bodyParser.json(), (request, response) => {
    const body = request.body || {}
    console.log({body})
    response.send(body)
})

app.all('*', (request, response) => {
    console.log({request})
    response.send('Oops, please enter correct url!')
}) 


app.listen(1337, () => {
    console.log('localhost:1337')

})

module.exports = app