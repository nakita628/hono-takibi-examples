import { OpenAPIHono } from '@hono/zod-openapi'
import { getHeartbeatRoute } from '../routes'

const app = new OpenAPIHono()

export const heartbeatHandler = app.openapi(getHeartbeatRoute, (c) => {
  throw new Error('Not implemented')
})
