import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListFirewallDomainListsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverListFirewallDomainListsHandler = app.openapi(
  postXAmzTargetRoute53ResolverListFirewallDomainListsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
