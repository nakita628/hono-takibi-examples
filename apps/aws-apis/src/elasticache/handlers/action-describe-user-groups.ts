import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeUserGroupsRoute, postActionDescribeUserGroupsRoute } from '../routes'

export const getActionDescribeUserGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeUserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeUserGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeUserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
