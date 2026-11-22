import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiQueueRoute, postApiInterruptRoute, postApiQueueRoute } from '../routes'

const app = new OpenAPIHono()

export const queueHandler = app
  .openapi(postApiInterruptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
