import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112UpdateFirewallPolicyHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
