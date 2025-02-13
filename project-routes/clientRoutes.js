import express from from `express`
export const client = express()
import { getclients,postclients,putClients,deleteclients} from "../controllers/clientcpntroller"

client.get('/clients', getclients)
client.post('/clients',postclients)
client.put('/clients', putClients)
client.delete('/clients', deleteclients)