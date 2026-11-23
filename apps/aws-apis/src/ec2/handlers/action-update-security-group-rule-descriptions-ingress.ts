import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateSecurityGroupRuleDescriptionsIngressRoute,
  postActionUpdateSecurityGroupRuleDescriptionsIngressRoute,
} from '../routes'

export const getActionUpdateSecurityGroupRuleDescriptionsIngressRouteHandler: RouteHandler<
  typeof getActionUpdateSecurityGroupRuleDescriptionsIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateSecurityGroupRuleDescriptionsIngressRouteHandler: RouteHandler<
  typeof postActionUpdateSecurityGroupRuleDescriptionsIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
