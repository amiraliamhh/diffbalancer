require('dotenv').config()

import Fastify from 'fastify'

const fastify = Fastify()
const PORT = Number(process.env.PORT) || 3000

fastify.listen(PORT, (err, address) => {
    if (err) throw err

    console.info(`Server is listening on ${address}`)
})
