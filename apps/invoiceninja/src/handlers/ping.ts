import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1LastErrorRoute, getApiV1PingRoute } from '../routes'

const app = new OpenAPIHono()

export const pingHandler = app
  .openapi(getApiV1PingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LastErrorRoute, (c) => {
    throw new Error('Not implemented')
  })
