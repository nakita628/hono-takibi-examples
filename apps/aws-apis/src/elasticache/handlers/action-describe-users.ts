import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeUsersRoute, postActionDescribeUsersRoute } from '../routes'

export const getActionDescribeUsersRouteHandler: RouteHandler<
  typeof getActionDescribeUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeUsersRouteHandler: RouteHandler<
  typeof postActionDescribeUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
