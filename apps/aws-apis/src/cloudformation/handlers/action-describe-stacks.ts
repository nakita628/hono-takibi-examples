import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeStacksRoute, postActionDescribeStacksRoute } from '../routes'

export const getActionDescribeStacksRouteHandler: RouteHandler<
  typeof getActionDescribeStacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeStacksRouteHandler: RouteHandler<
  typeof postActionDescribeStacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
