import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventsIdRoute, getEventsRoute, optionsEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
