import { OpenAPIHono } from '@hono/zod-openapi'
import { getVmmPingRoute } from '../routes'

const app = new OpenAPIHono()

export const vmmPingHandler = app.openapi(getVmmPingRoute, (c) => {
  throw new Error('Not implemented')
})
