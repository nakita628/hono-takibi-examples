import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListVPCEConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListVPCEConfigurationsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListVPCEConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
