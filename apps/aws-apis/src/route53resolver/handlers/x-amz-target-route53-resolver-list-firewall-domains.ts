import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListFirewallDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverListFirewallDomainsHandler = app.openapi(
  postXAmzTargetRoute53ResolverListFirewallDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
