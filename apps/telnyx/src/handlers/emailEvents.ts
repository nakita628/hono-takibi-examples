import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmailEventsRoute, getEmailEventsStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const emailEventsHandler = app
  .openapi(getEmailEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailEventsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
