import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnalyticsEventsIdRoute, getAnalyticsEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getAnalyticsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
