import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeDBLogFilesRoute, postActionDescribeDBLogFilesRoute } from '../routes'

export const getActionDescribeDBLogFilesRouteHandler: RouteHandler<
  typeof getActionDescribeDBLogFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBLogFilesRouteHandler: RouteHandler<
  typeof postActionDescribeDBLogFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
