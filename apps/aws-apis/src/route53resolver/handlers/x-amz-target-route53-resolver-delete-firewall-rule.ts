import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverDeleteFirewallRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverDeleteFirewallRuleHandler = app.openapi(
  postXAmzTargetRoute53ResolverDeleteFirewallRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
