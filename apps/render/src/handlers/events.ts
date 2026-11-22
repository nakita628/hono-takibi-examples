import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventsEventIdRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app.openapi(getEventsEventIdRoute, (c) => {
  throw new Error('Not implemented')
})
