import { OpenAPIHono } from '@hono/zod-openapi'
import { getLoggingRoute, putLoggingRoute } from '../routes'

const app = new OpenAPIHono()

export const loggingHandler = app
  .openapi(getLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
