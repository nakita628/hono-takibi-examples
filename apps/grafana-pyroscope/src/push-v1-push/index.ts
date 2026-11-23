import { OpenAPIHono } from '@hono/zod-openapi'
import { postPushV1PusherServicePushRoute } from './routes'
import { postPushV1PusherServicePushRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postPushV1PusherServicePushRoute,
  postPushV1PusherServicePushRouteHandler,
)

export default app
