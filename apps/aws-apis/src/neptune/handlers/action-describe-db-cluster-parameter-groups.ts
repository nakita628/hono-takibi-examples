import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBClusterParameterGroupsRoute,
  postActionDescribeDBClusterParameterGroupsRoute,
} from '../routes'

export const getActionDescribeDBClusterParameterGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeDBClusterParameterGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBClusterParameterGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeDBClusterParameterGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
