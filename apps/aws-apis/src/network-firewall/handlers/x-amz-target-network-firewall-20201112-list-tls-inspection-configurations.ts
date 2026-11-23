import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112ListTlsInspectionConfigurationsHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
