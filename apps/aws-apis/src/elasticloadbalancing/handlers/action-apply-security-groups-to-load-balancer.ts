import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionApplySecurityGroupsToLoadBalancerRoute,
  postActionApplySecurityGroupsToLoadBalancerRoute,
} from '../routes'

export const getActionApplySecurityGroupsToLoadBalancerRouteHandler: RouteHandler<
  typeof getActionApplySecurityGroupsToLoadBalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionApplySecurityGroupsToLoadBalancerRouteHandler: RouteHandler<
  typeof postActionApplySecurityGroupsToLoadBalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
