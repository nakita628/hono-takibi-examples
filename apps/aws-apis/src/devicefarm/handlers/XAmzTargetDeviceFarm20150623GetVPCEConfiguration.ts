import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetVPCEConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623GetVPCEConfigurationHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetVPCEConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
