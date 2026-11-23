import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeLoadBalancerPolicyTypesRoute,
  postActionDescribeLoadBalancerPolicyTypesRoute,
} from '../routes'

export const getActionDescribeLoadBalancerPolicyTypesRouteHandler: RouteHandler<
  typeof getActionDescribeLoadBalancerPolicyTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeLoadBalancerPolicyTypesRouteHandler: RouteHandler<
  typeof postActionDescribeLoadBalancerPolicyTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
