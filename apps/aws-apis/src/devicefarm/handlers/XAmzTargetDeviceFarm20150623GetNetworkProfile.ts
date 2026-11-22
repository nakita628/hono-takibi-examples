import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetNetworkProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623GetNetworkProfileHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetNetworkProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
