import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
