import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtectionHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
