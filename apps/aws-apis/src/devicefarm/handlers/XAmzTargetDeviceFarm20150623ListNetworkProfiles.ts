import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListNetworkProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListNetworkProfilesHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListNetworkProfilesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
