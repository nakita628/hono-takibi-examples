import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsageEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const usageEventsHandler = app.openapi(postUsageEventsRoute, (c) => {
  throw new Error('Not implemented')
})
