const express = require('express')
const app = express()
const heroes = require('./heroes.json')

app.get('/heroes', (request, response) => {
    response.send(heroes)
})

app.get('/heroes/:filter', (request, response) => {
    let result = heroes.filter( (hero) => {
        let filter = request.params.filter
        return hero.slug === filter || hero.realname === filter || hero.name === filter
    } )
    
    response.send(result)
} )

app.all('*', (request, response) => {
    response.send('Specify a valid url please.')
} )

app.listen(1337, () => {
    console.log('Server is up and running. Better go catch it.')
})