import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListDeviceInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623ListDeviceInstancesHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListDeviceInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
