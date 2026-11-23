import { OpenAPIHono } from '@hono/zod-openapi'
import { getPingRoute, headPingRoute } from '../routes'

const app = new OpenAPIHono()

export const pingHandler = app
  .openapi(getPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headPingRoute, (c) => {
    throw new Error('Not implemented')
  })
