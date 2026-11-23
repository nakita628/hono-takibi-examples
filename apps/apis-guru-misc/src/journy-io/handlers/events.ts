import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventsRoute, postEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
