import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623UpdateVPCEConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623UpdateVPCEConfigurationHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623UpdateVPCEConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
