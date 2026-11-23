import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetLoadBalancerPoliciesForBackendServerRoute,
  postActionSetLoadBalancerPoliciesForBackendServerRoute,
} from '../routes'

export const getActionSetLoadBalancerPoliciesForBackendServerRouteHandler: RouteHandler<
  typeof getActionSetLoadBalancerPoliciesForBackendServerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetLoadBalancerPoliciesForBackendServerRouteHandler: RouteHandler<
  typeof postActionSetLoadBalancerPoliciesForBackendServerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
