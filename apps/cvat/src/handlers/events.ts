import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiEventsRoute, postApiEventsExportRoute, postApiEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getApiEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEventsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
