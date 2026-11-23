import { OpenAPIHono } from '@hono/zod-openapi'
import { getLoggingOptionsRoute, postLoggingOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const loggingOptionsHandler = app
  .openapi(getLoggingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoggingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
