import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeLoadBalancersRoute,
  postActionDescribeLoadBalancersRoute,
} from '../routes'

export const getActionDescribeLoadBalancersRouteHandler: RouteHandler<
  typeof getActionDescribeLoadBalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeLoadBalancersRouteHandler: RouteHandler<
  typeof postActionDescribeLoadBalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
