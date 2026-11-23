import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetLoadBalancerPoliciesOfListenerRoute,
  postActionSetLoadBalancerPoliciesOfListenerRoute,
} from '../routes'

export const getActionSetLoadBalancerPoliciesOfListenerRouteHandler: RouteHandler<
  typeof getActionSetLoadBalancerPoliciesOfListenerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetLoadBalancerPoliciesOfListenerRouteHandler: RouteHandler<
  typeof postActionSetLoadBalancerPoliciesOfListenerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
