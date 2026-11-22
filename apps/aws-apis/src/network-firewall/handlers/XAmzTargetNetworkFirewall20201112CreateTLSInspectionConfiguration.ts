import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112CreateTLSInspectionConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112CreateTLSInspectionConfigurationHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112CreateTLSInspectionConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
