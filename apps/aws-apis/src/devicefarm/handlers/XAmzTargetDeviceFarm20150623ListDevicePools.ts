import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListDevicePoolsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListDevicePoolsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListDevicePoolsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
