import { OpenAPIHono } from '@hono/zod-openapi'
import { getDevicesDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const devicesDeviceFunctionsHandler = app.openapi(getDevicesDeltaRoute, (c) => {
  throw new Error('Not implemented')
})
