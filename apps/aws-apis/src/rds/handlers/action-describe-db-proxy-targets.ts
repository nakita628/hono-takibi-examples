import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBProxyTargetsRoute,
  postActionDescribeDBProxyTargetsRoute,
} from '../routes'

export const getActionDescribeDBProxyTargetsRouteHandler: RouteHandler<
  typeof getActionDescribeDBProxyTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBProxyTargetsRouteHandler: RouteHandler<
  typeof postActionDescribeDBProxyTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
