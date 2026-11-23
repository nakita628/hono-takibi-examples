import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBParameterGroupsRoute,
  postActionDescribeDBParameterGroupsRoute,
} from '../routes'

export const getActionDescribeDBParameterGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeDBParameterGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBParameterGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeDBParameterGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
