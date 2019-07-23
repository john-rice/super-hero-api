var express = require('express')
var heroes = require('./heroes.json')
var bodyParser = require('body-parser')

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

app.post('/heroes', bodyParser.json(), (request, response) => {
  const { name, realname, firstappearance, slug } = request.body

  if (!name || !realname || !firstappearance || !slug) {
    response.status(400).send('The following attributes are required: name, realname, firstappearance, slug')
  }

  const newHero = { name, realname, firstappearance, slug }

  heroes.push(newHero)
  response.status(201).send(newHero)
})

app.all('*', (request, response) => {
  response.sendStatus(404)
})

app.listen(1337, () => { console.log('Listening on 1337...') })

module.exports = app
