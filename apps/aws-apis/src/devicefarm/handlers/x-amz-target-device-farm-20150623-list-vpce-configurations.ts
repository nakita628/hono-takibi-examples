import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListVPCEConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623ListVpceConfigurationsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListVPCEConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
