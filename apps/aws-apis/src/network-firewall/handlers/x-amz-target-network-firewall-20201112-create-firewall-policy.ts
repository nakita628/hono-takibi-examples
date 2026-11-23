import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112CreateFirewallPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112CreateFirewallPolicyHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112CreateFirewallPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
