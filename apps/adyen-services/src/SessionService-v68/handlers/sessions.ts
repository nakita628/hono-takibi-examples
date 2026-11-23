import { OpenAPIHono } from '@hono/zod-openapi'
import { postSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app.openapi(postSessionsRoute, (c) => {
  throw new Error('Not implemented')
})
