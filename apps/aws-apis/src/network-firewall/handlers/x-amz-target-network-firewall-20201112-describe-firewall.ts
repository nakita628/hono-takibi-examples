import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DescribeFirewallRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112DescribeFirewallHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112DescribeFirewallRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
