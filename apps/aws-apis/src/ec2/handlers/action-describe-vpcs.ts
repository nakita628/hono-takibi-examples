import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeVpcsRoute, postActionDescribeVpcsRoute } from '../routes'

export const getActionDescribeVpcsRouteHandler: RouteHandler<
  typeof getActionDescribeVpcsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVpcsRouteHandler: RouteHandler<
  typeof postActionDescribeVpcsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
