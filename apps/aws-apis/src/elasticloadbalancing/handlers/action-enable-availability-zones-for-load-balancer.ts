import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionEnableAvailabilityZonesForLoadBalancerRoute,
  postActionEnableAvailabilityZonesForLoadBalancerRoute,
} from '../routes'

export const getActionEnableAvailabilityZonesForLoadBalancerRouteHandler: RouteHandler<
  typeof getActionEnableAvailabilityZonesForLoadBalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableAvailabilityZonesForLoadBalancerRouteHandler: RouteHandler<
  typeof postActionEnableAvailabilityZonesForLoadBalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
