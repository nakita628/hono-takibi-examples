import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtectionHandler =
  app.openapi(
    postXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
