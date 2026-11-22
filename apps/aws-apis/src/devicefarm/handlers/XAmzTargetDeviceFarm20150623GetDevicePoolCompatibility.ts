import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
