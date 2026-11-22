import { OpenAPIHono } from '@hono/zod-openapi'
import { postPushV1PusherServicePushRoute } from '../routes'

const app = new OpenAPIHono()

export const scopePublicHandler = app.openapi(postPushV1PusherServicePushRoute, (c) => {
  throw new Error('Not implemented')
})
