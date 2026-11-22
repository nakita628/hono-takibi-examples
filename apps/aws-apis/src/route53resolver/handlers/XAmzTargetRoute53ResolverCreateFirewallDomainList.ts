import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverCreateFirewallDomainListRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverCreateFirewallDomainListHandler = app.openapi(
  postXAmzTargetRoute53ResolverCreateFirewallDomainListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
