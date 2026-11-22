import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeviceDetectRoute } from '../routes'

const app = new OpenAPIHono()

export const deviceHandler = app.openapi(postDeviceDetectRoute, (c) => {
  throw new Error('Not implemented')
})
