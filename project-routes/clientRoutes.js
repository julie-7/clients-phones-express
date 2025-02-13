import express from from `express`
export const client = express()
import { getclients,postclients,putClients, } from "../controllers/clientcpntroller"

client.get('/clients', getclients)
client.post('/clients',postclients)
client.put('/clients', putClients)