import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112CreateTLSInspectionConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112CreateTlsInspectionConfigurationHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112CreateTLSInspectionConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
