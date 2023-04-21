import cookie from '@fastify/cookie'
import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

app.addHook('preHandler', async (req, reply) => {
  console.log(`[${req.method}] ${req.url}`)
})

app.register(transactionsRoutes, { prefix: '/transactions' })
