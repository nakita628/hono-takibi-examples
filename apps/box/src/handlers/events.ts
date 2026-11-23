import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventsRoute, optionsEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(optionsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
