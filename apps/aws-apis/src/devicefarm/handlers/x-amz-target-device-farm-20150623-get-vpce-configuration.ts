import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetVPCEConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623GetVpceConfigurationHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetVPCEConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
