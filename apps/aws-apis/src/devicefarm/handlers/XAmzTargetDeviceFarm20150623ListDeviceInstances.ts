import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListDeviceInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListDeviceInstancesHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListDeviceInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
