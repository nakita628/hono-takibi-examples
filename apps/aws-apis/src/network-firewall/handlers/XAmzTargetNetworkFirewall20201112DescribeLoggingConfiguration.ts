import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DescribeLoggingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112DescribeLoggingConfigurationHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112DescribeLoggingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
