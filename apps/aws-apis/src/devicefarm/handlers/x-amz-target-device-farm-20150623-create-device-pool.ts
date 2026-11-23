import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623CreateDevicePoolRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623CreateDevicePoolHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623CreateDevicePoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
