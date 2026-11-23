import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112UpdateTLSInspectionConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112UpdateTlsInspectionConfigurationHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112UpdateTLSInspectionConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
