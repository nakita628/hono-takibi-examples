import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateLoadBalancerRoute, postActionCreateLoadBalancerRoute } from '../routes'

export const getActionCreateLoadBalancerRouteHandler: RouteHandler<
  typeof getActionCreateLoadBalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateLoadBalancerRouteHandler: RouteHandler<
  typeof postActionCreateLoadBalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
