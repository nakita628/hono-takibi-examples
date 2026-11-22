import { OpenAPIHono } from '@hono/zod-openapi'
import { getIdEventsRoute, postIdEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
