import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventsRoute, postEventsRoute, postEventsSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const dataEventsHandler = app
  .openapi(postEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
