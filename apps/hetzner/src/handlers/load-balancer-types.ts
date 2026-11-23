import type { RouteHandler } from '@hono/zod-openapi'
import type { getLoadBalancerTypesIdRoute, getLoadBalancerTypesRoute } from '../routes'

export const getLoadBalancerTypesRouteHandler: RouteHandler<
  typeof getLoadBalancerTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLoadBalancerTypesIdRouteHandler: RouteHandler<
  typeof getLoadBalancerTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
