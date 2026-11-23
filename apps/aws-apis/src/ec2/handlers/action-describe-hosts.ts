import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeHostsRoute, postActionDescribeHostsRoute } from '../routes'

export const getActionDescribeHostsRouteHandler: RouteHandler<
  typeof getActionDescribeHostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeHostsRouteHandler: RouteHandler<
  typeof postActionDescribeHostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
