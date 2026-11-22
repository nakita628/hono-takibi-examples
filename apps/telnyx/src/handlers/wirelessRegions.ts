import { OpenAPIHono } from '@hono/zod-openapi'
import { getWirelessRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const wirelessRegionsHandler = app.openapi(getWirelessRegionsRoute, (c) => {
  throw new Error('Not implemented')
})
