import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623CreateVPCEConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623CreateVPCEConfigurationHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623CreateVPCEConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
