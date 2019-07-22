var express = require('express')
var heroes = require('./heroes.json')

var app = express()

app.get('/heroes', (request, response) => {
  response.send(heroes)
})

app.get('/heroes/:slug', (request, response) => {
  var matchingHeroes = heroes.filter((item) => {
    return item.slug === request.params.slug
  })

  if (matchingHeroes.length) {
    response.send(matchingHeroes)
  } else {
    response.sendStatus(404)
  }
})

app.all('*', (request, response) => {
  response.sendStatus(404)
})

app.listen(1337, () => { console.log('Listening on 1337...') })

module.exports = app
