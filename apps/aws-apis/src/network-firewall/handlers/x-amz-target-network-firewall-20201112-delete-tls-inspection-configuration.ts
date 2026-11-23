import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DeleteTLSInspectionConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112DeleteTlsInspectionConfigurationHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112DeleteTLSInspectionConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
