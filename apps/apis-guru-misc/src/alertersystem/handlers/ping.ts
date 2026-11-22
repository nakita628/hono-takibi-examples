import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPingIdRoute, getApiPingRoute, postApiPingRoute } from '../routes'

const app = new OpenAPIHono()

export const pingHandler = app
  .openapi(getApiPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
