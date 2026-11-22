import { OpenAPIHono } from '@hono/zod-openapi'
import { postEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app.openapi(postEventsRoute, (c) => {
  throw new Error('Not implemented')
})
