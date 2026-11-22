import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationHandler = app.openapi(
  postXAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
