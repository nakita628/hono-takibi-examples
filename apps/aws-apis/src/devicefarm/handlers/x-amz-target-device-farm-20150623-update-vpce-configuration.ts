import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623UpdateVPCEConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623UpdateVpceConfigurationHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623UpdateVPCEConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
