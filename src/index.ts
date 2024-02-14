import { serve } from '@hono/node-server'

import { Hono } from 'hono'
import { api } from './api'
import { logger } from 'hono/logger'
import { swaggerUI } from '@hono/swagger-ui'

const app = new Hono()

app.use('/*', logger())
app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.post('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})
app.get('/docs/ui', swaggerUI({ url: '/api/openapi' }))
app.route('/api', api)

const port = 3000
console.log('launching server on port', port)

serve({
  fetch: app.fetch,
  port
})