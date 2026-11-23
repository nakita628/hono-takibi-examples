import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeLoadBalancerPoliciesRoute,
  postActionDescribeLoadBalancerPoliciesRoute,
} from '../routes'

export const getActionDescribeLoadBalancerPoliciesRouteHandler: RouteHandler<
  typeof getActionDescribeLoadBalancerPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeLoadBalancerPoliciesRouteHandler: RouteHandler<
  typeof postActionDescribeLoadBalancerPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
