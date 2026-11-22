import { OpenAPIHono } from '@hono/zod-openapi'
import { getUtilPingRoute } from '../routes'

const app = new OpenAPIHono()

export const utilityEndpointsHandler = app.openapi(getUtilPingRoute, (c) => {
  throw new Error('Not implemented')
})
