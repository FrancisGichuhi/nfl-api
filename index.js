
const express = require ('express') 
const app = express ()
const teams = require('./teams.json')
const http_port = 1337
const bodyParser = require('body-parser')

// Todo: Create the teams.js
const TeamsModel = require('./teams.json')


//goal is to remove this and 

app.get('/teams', (request, response) => {
    response.send(teams)
})

app.get('/teams/:filter', (request, response) => {
    let filter = request.params.filter
    let result = teams.filter( (team) => {
    return team.id == filter || team.abbreviation == filter || team.division == filter || team.conference == filter
  })
    let locations = result.map((team) => {
    return team.location
    })
    response.send(locations)
    console.log(filter)
})

// app.get('/teams/:idFilter/:abbreviation', (request, response) => {
//     let teamByAbbreviation = teams.filter( (team) => {
//         return team.abbreviation == request.params.abbreviation
//   })  
//     response.send(teamByAbbreviation)
// }) 

app.post('/teams', bodyParser.json(), (request, response) => {
    const body = request.body
    let newTeams = teams.concat(body)
    if (!"id" || !"location" || !"mascot" || !"abbreviation" || !"conference" || !"division") 
    if (!body.id || !body.location || !body.mascot || !body.abbreviation || !body.conference || !body.division) {
        response.status(400).send('The following attributes are required: location, mascot, abbreviation, conference, division')
    }
    console.log({body})
    response.send(newTeams)
})

app.all('*', (request, response) => {
    console.log({request})
    response.send('Oops, please enter correct url!')
}) 


app.listen(1337, () => {
    console.log('localhost:1337')

})

module.exports = app