import { OpenAPIHono } from '@hono/zod-openapi'
import { postTraceGraphRoute } from '../routes'

const app = new OpenAPIHono()

export const traceGraphHandler = app.openapi(postTraceGraphRoute, (c) => {
  throw new Error('Not implemented')
})
