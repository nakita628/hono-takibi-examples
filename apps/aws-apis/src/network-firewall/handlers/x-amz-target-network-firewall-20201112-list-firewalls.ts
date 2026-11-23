import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112ListFirewallsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112ListFirewallsHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112ListFirewallsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
