import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DescribeFirewallPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112DescribeFirewallPolicyHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112DescribeFirewallPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
