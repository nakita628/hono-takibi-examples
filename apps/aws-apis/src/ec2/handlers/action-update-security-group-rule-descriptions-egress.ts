import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateSecurityGroupRuleDescriptionsEgressRoute,
  postActionUpdateSecurityGroupRuleDescriptionsEgressRoute,
} from '../routes'

export const getActionUpdateSecurityGroupRuleDescriptionsEgressRouteHandler: RouteHandler<
  typeof getActionUpdateSecurityGroupRuleDescriptionsEgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateSecurityGroupRuleDescriptionsEgressRouteHandler: RouteHandler<
  typeof postActionUpdateSecurityGroupRuleDescriptionsEgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
