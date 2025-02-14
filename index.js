import express from 'express'
const app = express()
app.use(express.json())
import { client } from './project-routes/clientRoutes.js'
import {phone} from './project-routes/phoneRoutes.js'

app.use(client)
app.use(phone)

app.listen(4000)