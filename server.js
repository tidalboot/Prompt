const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
    .prepare()
    .then(() => {
        const server = express()

        server.get('/story=:id', (req, res) => {
            const actualPage = '/story'
            const queryParameters = { title: req.params.id }
            app.render(req, res, actualPage, queryParameters)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, err => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    .catch(exception => {
        console.log(exception.stack)
        process.exit(1)
    })
    })