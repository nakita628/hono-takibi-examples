import { OpenAPIHono } from '@hono/zod-openapi'
import { postTraceSegmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const traceSegmentsHandler = app.openapi(postTraceSegmentsRoute, (c) => {
  throw new Error('Not implemented')
})
