import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurationsHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
