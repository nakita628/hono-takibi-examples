import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeIpamsRoute, postActionDescribeIpamsRoute } from '../routes'

export const getActionDescribeIpamsRouteHandler: RouteHandler<
  typeof getActionDescribeIpamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeIpamsRouteHandler: RouteHandler<
  typeof postActionDescribeIpamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
