import { OpenAPIHono } from '@hono/zod-openapi'
import { postEventsListRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app.openapi(postEventsListRoute, (c) => {
  throw new Error('Not implemented')
})
