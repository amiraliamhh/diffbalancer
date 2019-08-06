require('dotenv').config()

import Fastify from 'fastify'
import { parse } from 'useragent'

const fastify = Fastify()
const PORT = Number(process.env.PORT) || 3000

fastify.all('*', (req, reply) => {
    reply.send({ success: parse(req.headers['user-agent']) })
})

fastify.listen(PORT, (err, address) => {
    if (err) throw err

    console.info(`Server is listening on ${address}`)
})
