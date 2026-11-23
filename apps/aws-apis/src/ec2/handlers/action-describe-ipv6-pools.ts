import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeIpv6PoolsRoute, postActionDescribeIpv6PoolsRoute } from '../routes'

export const getActionDescribeIpv6PoolsRouteHandler: RouteHandler<
  typeof getActionDescribeIpv6PoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeIpv6PoolsRouteHandler: RouteHandler<
  typeof postActionDescribeIpv6PoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
