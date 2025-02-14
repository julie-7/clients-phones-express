import express from 'express'
const app = express()
app.use(express.json())
import { Client } from './routes/routeclients.js'
import {phone} from './routes/routesphones.js'

app.use(Client)
app.use(phone)

app.listen(3000)