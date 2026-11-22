import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623GetDeviceHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
