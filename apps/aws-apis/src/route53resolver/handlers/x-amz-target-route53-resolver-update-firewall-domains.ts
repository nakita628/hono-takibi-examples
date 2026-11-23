import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverUpdateFirewallDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverUpdateFirewallDomainsHandler = app.openapi(
  postXAmzTargetRoute53ResolverUpdateFirewallDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
