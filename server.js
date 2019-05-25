const express = require('express')
const next = require('next')
const { readFile } = require('fs')


const readFileAsync = fileName => new Promise((resolve, reject) =>
    readFile(fileName, (err, data) => {
        if (err)
            return reject(err)
        return resolve(data)
    })
);

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
    .prepare()
    .then(() => {
        const server = express()

        server.get('/story/:id', (req, res) => {
            const actualPage = '/story'
            const queryParameters = { id: req.params.id }
            app.render(req, res, actualPage, queryParameters)
        })

        server.get('/storyData', async (req, res) => {

            const rawData = await readFileAsync('./stories/' + req.query.id + '.json')

            const jsonData = JSON.parse(rawData)

            res.json(jsonData)
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