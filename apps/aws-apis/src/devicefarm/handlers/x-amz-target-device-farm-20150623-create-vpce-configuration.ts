import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623CreateVPCEConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623CreateVpceConfigurationHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623CreateVPCEConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
