import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListDevicesHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListDevicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
