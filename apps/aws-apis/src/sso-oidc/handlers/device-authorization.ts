import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeviceAuthorizationRoute } from '../routes'

const app = new OpenAPIHono()

export const deviceAuthorizationHandler = app.openapi(postDeviceAuthorizationRoute, (c) => {
  throw new Error('Not implemented')
})
