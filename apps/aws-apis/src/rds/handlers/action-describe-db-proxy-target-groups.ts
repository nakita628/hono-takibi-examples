import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBProxyTargetGroupsRoute,
  postActionDescribeDBProxyTargetGroupsRoute,
} from '../routes'

export const getActionDescribeDBProxyTargetGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeDBProxyTargetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBProxyTargetGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeDBProxyTargetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
