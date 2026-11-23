import { OpenAPIHono } from '@hono/zod-openapi'
import { postInsightEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const insightEventsHandler = app.openapi(postInsightEventsRoute, (c) => {
  throw new Error('Not implemented')
})
