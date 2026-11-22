import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112UpdateFirewallDescriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112UpdateFirewallDescriptionHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112UpdateFirewallDescriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
