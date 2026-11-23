import { OpenAPIHono } from '@hono/zod-openapi'
import { postSessionsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app.openapi(postSessionsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
