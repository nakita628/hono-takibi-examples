import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeDBProxiesRoute, postActionDescribeDBProxiesRoute } from '../routes'

export const getActionDescribeDBProxiesRouteHandler: RouteHandler<
  typeof getActionDescribeDBProxiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBProxiesRouteHandler: RouteHandler<
  typeof postActionDescribeDBProxiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
