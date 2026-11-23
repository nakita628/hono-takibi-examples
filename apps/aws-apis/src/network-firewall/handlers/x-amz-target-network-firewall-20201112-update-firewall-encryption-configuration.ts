import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfigurationHandler =
  app.openapi(
    postXAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
