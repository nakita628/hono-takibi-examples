import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeregisterInstancesFromLoadBalancerRoute,
  postActionDeregisterInstancesFromLoadBalancerRoute,
} from '../routes'

export const getActionDeregisterInstancesFromLoadBalancerRouteHandler: RouteHandler<
  typeof getActionDeregisterInstancesFromLoadBalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeregisterInstancesFromLoadBalancerRouteHandler: RouteHandler<
  typeof postActionDeregisterInstancesFromLoadBalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
