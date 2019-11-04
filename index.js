
const express = require ('express')
const app = express ()
const teams = require('./teams.json')

app.get('/teams', (request, response) => {
    response.send(teams)
  })

app.get('/teams/:id/', (request, response) => {
  let teamById = teams.filter( (team) => {
    return team.id == request.params.id
  })
    response.send(teamById)
})

app.listen(1337, () => {
    console.log('localhost:1337')

})