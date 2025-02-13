import express from from `express`
export const phone = express()
import { deletephones, getphones, postphones, putphones } from "../controllers/phonecontroller"

phone.get('/phones', getphones)
phone.post('/phones',postphones)
phone.put('/phones', putphones)
phone.delete('/phones', deletephones)