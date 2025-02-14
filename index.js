import express from `express`
const app = express()
import { Client } from './routes/routeclients.js'
import {phone} from './routes/routesphones.js'

app.use(express.json())
app.use(Client)
app.use(phone)

app.listen(3000)