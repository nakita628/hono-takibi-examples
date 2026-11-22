import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationHandler = app.openapi(
  postXAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
