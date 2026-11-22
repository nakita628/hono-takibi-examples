import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DeleteFirewallRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112DeleteFirewallHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112DeleteFirewallRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
