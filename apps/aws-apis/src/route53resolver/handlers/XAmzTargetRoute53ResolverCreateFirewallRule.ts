import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverCreateFirewallRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverCreateFirewallRuleHandler = app.openapi(
  postXAmzTargetRoute53ResolverCreateFirewallRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
