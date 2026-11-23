import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteLoadBalancerPolicyRoute,
  postActionDeleteLoadBalancerPolicyRoute,
} from '../routes'

export const getActionDeleteLoadBalancerPolicyRouteHandler: RouteHandler<
  typeof getActionDeleteLoadBalancerPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteLoadBalancerPolicyRouteHandler: RouteHandler<
  typeof postActionDeleteLoadBalancerPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
