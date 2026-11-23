import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRegisterInstancesWithLoadBalancerRoute,
  postActionRegisterInstancesWithLoadBalancerRoute,
} from '../routes'

export const getActionRegisterInstancesWithLoadBalancerRouteHandler: RouteHandler<
  typeof getActionRegisterInstancesWithLoadBalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRegisterInstancesWithLoadBalancerRouteHandler: RouteHandler<
  typeof postActionRegisterInstancesWithLoadBalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
