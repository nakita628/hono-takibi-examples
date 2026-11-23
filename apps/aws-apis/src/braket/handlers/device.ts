import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeviceDeviceArnRoute } from '../routes'

const app = new OpenAPIHono()

export const deviceHandler = app.openapi(getDeviceDeviceArnRoute, (c) => {
  throw new Error('Not implemented')
})
