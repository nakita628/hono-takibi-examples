import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeClusterParameterGroupsRoute,
  postActionDescribeClusterParameterGroupsRoute,
} from '../routes'

export const getActionDescribeClusterParameterGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeClusterParameterGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClusterParameterGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeClusterParameterGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
