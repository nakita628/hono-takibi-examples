import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112AssociateFirewallPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112AssociateFirewallPolicyHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112AssociateFirewallPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
