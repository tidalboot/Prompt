const express = require('express')
const next = require('next')
const { readFile } = require('fs')
const { writeFile } = require('fs')
const { readdir } = require('fs')



const readFileAsync = fileName => new Promise((resolve, reject) =>
    readFile(fileName, (err, data) => {
        if (err)
            return reject(err)
        return resolve(data)
    })
);

const writeFileAsync = (path, contents) => new Promise((resolve, reject) =>
    writeFile(path, contents, (err) => {
        console.log("Writing...")
        if (err)
            return reject(err)
        return resolve()
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

            const rawData = await readFileAsync('stories/' + req.query.id + '.json')
            const jsonData = JSON.parse(rawData)
            res.send(jsonData)
        })

        server.get('/allStories', async (_, res) => {

            var storyNames = []

            await readdir("./stories", function(err, files) {
                console.log('Found the following files: ' + files)
                files.forEach(file => {
                    storyNames.push({'id': file.replace('.json', '')})
                  })
                  console.log(storyNames)
                res.json({'storyNames': storyNames})
            })
        })

        server.post('/makeStory', async (req, res) => { 

            const story = { title: req.query.title, contents: req.query.contents  }
            const formedStoryContent = { 
                "title": story.title,
                "content": story.contents
            }
            const stringified = JSON.stringify(formedStoryContent)

            console.log("Story title is " + story.title)
            console.log("and the contents are " + stringified)

            await writeFileAsync('./stories/' + story.title + '.json', stringified)

            res.sendStatus(200)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, err => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
   
}).catch()