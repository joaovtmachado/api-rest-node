import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import { env } from './env'
import cookie from '@fastify/cookie'
export const app = fastify()

//  GET, POST, PUT, PATCH, DELETE

//  http://localhost:3333/hello
app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
