import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DeleteFirewallPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112DeleteFirewallPolicyHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112DeleteFirewallPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
