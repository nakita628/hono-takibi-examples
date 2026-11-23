import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeDBClustersRoute, postActionDescribeDBClustersRoute } from '../routes'

export const getActionDescribeDBClustersRouteHandler: RouteHandler<
  typeof getActionDescribeDBClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBClustersRouteHandler: RouteHandler<
  typeof postActionDescribeDBClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
