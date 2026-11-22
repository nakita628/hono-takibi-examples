import { OpenAPIHono } from '@hono/zod-openapi'
import { getHelloRoute, getReadyRoute } from '../routes'

const app = new OpenAPIHono()

export const healthCheckingHandler = app
  .openapi(getHelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReadyRoute, (c) => {
    throw new Error('Not implemented')
  })
