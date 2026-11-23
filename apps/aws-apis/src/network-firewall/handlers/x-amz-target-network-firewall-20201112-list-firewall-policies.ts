import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112ListFirewallPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112ListFirewallPoliciesHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112ListFirewallPoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
