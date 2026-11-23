import { OpenAPIHono } from '@hono/zod-openapi'
import { getLbheartbeatRoute } from '../routes'

const app = new OpenAPIHono()

export const lbheartbeatHandler = app.openapi(getLbheartbeatRoute, (c) => {
  throw new Error('Not implemented')
})
