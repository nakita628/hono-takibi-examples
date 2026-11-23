import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeIpamPoolsRoute, postActionDescribeIpamPoolsRoute } from '../routes'

export const getActionDescribeIpamPoolsRouteHandler: RouteHandler<
  typeof getActionDescribeIpamPoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeIpamPoolsRouteHandler: RouteHandler<
  typeof postActionDescribeIpamPoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
