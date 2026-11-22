import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623UpdateNetworkProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623UpdateNetworkProfileHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623UpdateNetworkProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
