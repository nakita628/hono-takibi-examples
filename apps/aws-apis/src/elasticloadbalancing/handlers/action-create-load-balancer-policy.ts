import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateLoadBalancerPolicyRoute,
  postActionCreateLoadBalancerPolicyRoute,
} from '../routes'

export const getActionCreateLoadBalancerPolicyRouteHandler: RouteHandler<
  typeof getActionCreateLoadBalancerPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateLoadBalancerPolicyRouteHandler: RouteHandler<
  typeof postActionCreateLoadBalancerPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
