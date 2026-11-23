import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeLoadBalancerTargetGroupsRoute,
  postActionDescribeLoadBalancerTargetGroupsRoute,
} from '../routes'

export const getActionDescribeLoadBalancerTargetGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeLoadBalancerTargetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeLoadBalancerTargetGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeLoadBalancerTargetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
