import { OpenAPIHono } from '@hono/zod-openapi'
import { getFlushRoute, postFlushRoute } from '../routes'

const app = new OpenAPIHono()

export const flushHandler = app
  .openapi(getFlushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFlushRoute, (c) => {
    throw new Error('Not implemented')
  })
