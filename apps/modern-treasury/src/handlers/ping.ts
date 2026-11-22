import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPingRoute } from '../routes'

const app = new OpenAPIHono()

export const pingHandler = app.openapi(getApiPingRoute, (c) => {
  throw new Error('Not implemented')
})
