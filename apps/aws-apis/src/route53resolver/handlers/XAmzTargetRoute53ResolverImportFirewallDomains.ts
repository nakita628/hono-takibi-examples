import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverImportFirewallDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverImportFirewallDomainsHandler = app.openapi(
  postXAmzTargetRoute53ResolverImportFirewallDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
