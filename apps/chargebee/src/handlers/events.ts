import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventsEventIdRoute, getEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
