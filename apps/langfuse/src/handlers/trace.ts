import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiPublicTracesRoute, deleteApiPublicTracesTraceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const traceHandler = app
  .openapi(deleteApiPublicTracesTraceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
