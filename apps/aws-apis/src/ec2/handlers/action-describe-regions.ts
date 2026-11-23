import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeRegionsRoute, postActionDescribeRegionsRoute } from '../routes'

export const getActionDescribeRegionsRouteHandler: RouteHandler<
  typeof getActionDescribeRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeRegionsRouteHandler: RouteHandler<
  typeof postActionDescribeRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
