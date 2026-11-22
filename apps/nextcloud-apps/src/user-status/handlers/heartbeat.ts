import { OpenAPIHono } from '@hono/zod-openapi'
import { putOcsV2PhpAppsUserStatusApiV1HeartbeatRoute } from '../routes'

const app = new OpenAPIHono()

export const heartbeatHandler = app.openapi(putOcsV2PhpAppsUserStatusApiV1HeartbeatRoute, (c) => {
  throw new Error('Not implemented')
})
