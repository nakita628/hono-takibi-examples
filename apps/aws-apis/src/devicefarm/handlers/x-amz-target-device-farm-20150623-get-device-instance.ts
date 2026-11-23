import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetDeviceInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623GetDeviceInstanceHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetDeviceInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
