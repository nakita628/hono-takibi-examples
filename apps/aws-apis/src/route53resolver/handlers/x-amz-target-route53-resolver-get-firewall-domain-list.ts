import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverGetFirewallDomainListRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverGetFirewallDomainListHandler = app.openapi(
  postXAmzTargetRoute53ResolverGetFirewallDomainListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
