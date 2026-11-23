import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeIdFormatRoute, postActionDescribeIdFormatRoute } from '../routes'

export const getActionDescribeIdFormatRouteHandler: RouteHandler<
  typeof getActionDescribeIdFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeIdFormatRouteHandler: RouteHandler<
  typeof postActionDescribeIdFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
