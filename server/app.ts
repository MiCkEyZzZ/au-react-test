import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import routes from './routes'

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api', routes)
async function start () {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on port ${ PORT } ⚡⚡⚡`)
        })
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

start()
