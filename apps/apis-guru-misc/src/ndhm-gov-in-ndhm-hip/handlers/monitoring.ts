import { OpenAPIHono } from '@hono/zod-openapi'
import { getV05HeartbeatRoute } from '../routes'

const app = new OpenAPIHono()

export const monitoringHandler = app.openapi(getV05HeartbeatRoute, (c) => {
  throw new Error('Not implemented')
})
