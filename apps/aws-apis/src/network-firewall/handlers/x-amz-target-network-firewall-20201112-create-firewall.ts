import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112CreateFirewallRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112CreateFirewallHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112CreateFirewallRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
