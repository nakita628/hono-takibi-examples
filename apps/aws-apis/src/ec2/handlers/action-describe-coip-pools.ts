import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeCoipPoolsRoute, postActionDescribeCoipPoolsRoute } from '../routes'

export const getActionDescribeCoipPoolsRouteHandler: RouteHandler<
  typeof getActionDescribeCoipPoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeCoipPoolsRouteHandler: RouteHandler<
  typeof postActionDescribeCoipPoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
