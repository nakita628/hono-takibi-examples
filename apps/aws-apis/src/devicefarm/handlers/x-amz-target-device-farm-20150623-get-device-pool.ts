import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetDevicePoolRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623GetDevicePoolHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetDevicePoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
