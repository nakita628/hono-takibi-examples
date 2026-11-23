import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventsIdIndexRoute, getEventsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
