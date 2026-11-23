import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeTypeRoute, postActionDescribeTypeRoute } from '../routes'

export const getActionDescribeTypeRouteHandler: RouteHandler<
  typeof getActionDescribeTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTypeRouteHandler: RouteHandler<
  typeof postActionDescribeTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
