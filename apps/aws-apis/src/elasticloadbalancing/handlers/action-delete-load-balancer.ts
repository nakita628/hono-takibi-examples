import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteLoadBalancerRoute, postActionDeleteLoadBalancerRoute } from '../routes'

export const getActionDeleteLoadBalancerRouteHandler: RouteHandler<
  typeof getActionDeleteLoadBalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteLoadBalancerRouteHandler: RouteHandler<
  typeof postActionDeleteLoadBalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
