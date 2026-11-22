import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112UpdateLoggingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112UpdateLoggingConfigurationHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112UpdateLoggingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
