import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteEventsRoute, getEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
