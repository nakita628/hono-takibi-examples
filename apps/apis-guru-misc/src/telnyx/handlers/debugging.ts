import { OpenAPIHono } from '@hono/zod-openapi'
import { getCallEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const debuggingHandler = app.openapi(getCallEventsRoute, (c) => {
  throw new Error('Not implemented')
})
