import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623UpdateDevicePoolRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623UpdateDevicePoolHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623UpdateDevicePoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
