import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623DeleteNetworkProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623DeleteNetworkProfileHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623DeleteNetworkProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
