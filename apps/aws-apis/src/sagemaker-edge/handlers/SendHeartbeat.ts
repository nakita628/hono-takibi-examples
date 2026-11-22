import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendHeartbeatRoute } from '../routes'

const app = new OpenAPIHono()

export const SendHeartbeatHandler = app.openapi(postSendHeartbeatRoute, (c) => {
  throw new Error('Not implemented')
})
