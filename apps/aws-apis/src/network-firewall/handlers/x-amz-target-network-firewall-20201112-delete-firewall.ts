import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DeleteFirewallRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112DeleteFirewallHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112DeleteFirewallRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
