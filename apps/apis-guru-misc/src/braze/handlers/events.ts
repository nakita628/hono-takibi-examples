import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventsDataSeriesRoute, getEventsListRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsListRoute, (c) => {
    throw new Error('Not implemented')
  })
