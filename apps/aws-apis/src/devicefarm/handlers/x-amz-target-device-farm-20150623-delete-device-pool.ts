import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623DeleteDevicePoolRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623DeleteDevicePoolHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623DeleteDevicePoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
