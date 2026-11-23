import { OpenAPIHono } from '@hono/zod-openapi'
import { postBatchUsageEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app.openapi(postBatchUsageEventsRoute, (c) => {
  throw new Error('Not implemented')
})
