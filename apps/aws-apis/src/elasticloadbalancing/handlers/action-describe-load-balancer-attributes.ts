import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeLoadBalancerAttributesRoute,
  postActionDescribeLoadBalancerAttributesRoute,
} from '../routes'

export const getActionDescribeLoadBalancerAttributesRouteHandler: RouteHandler<
  typeof getActionDescribeLoadBalancerAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeLoadBalancerAttributesRouteHandler: RouteHandler<
  typeof postActionDescribeLoadBalancerAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
