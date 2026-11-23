import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverDeleteFirewallDomainListRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverDeleteFirewallDomainListHandler = app.openapi(
  postXAmzTargetRoute53ResolverDeleteFirewallDomainListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
