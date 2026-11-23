import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventsEventSocketRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app.openapi(getEventsEventSocketRoute, (c) => {
  throw new Error('Not implemented')
})
