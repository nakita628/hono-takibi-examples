import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623DeleteVPCEConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623DeleteVpceConfigurationHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623DeleteVPCEConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
