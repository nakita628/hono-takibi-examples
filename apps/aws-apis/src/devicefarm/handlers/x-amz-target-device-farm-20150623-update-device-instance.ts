import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623UpdateDeviceInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623UpdateDeviceInstanceHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623UpdateDeviceInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
