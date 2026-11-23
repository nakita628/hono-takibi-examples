import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeDataSharesRoute, postActionDescribeDataSharesRoute } from '../routes'

export const getActionDescribeDataSharesRouteHandler: RouteHandler<
  typeof getActionDescribeDataSharesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDataSharesRouteHandler: RouteHandler<
  typeof postActionDescribeDataSharesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
