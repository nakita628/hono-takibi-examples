import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisableAvailabilityZonesForLoadBalancerRoute,
  postActionDisableAvailabilityZonesForLoadBalancerRoute,
} from '../routes'

export const getActionDisableAvailabilityZonesForLoadBalancerRouteHandler: RouteHandler<
  typeof getActionDisableAvailabilityZonesForLoadBalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisableAvailabilityZonesForLoadBalancerRouteHandler: RouteHandler<
  typeof postActionDisableAvailabilityZonesForLoadBalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
