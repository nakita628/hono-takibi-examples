import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeWarmPoolRoute, postActionDescribeWarmPoolRoute } from '../routes'

export const getActionDescribeWarmPoolRouteHandler: RouteHandler<
  typeof getActionDescribeWarmPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeWarmPoolRouteHandler: RouteHandler<
  typeof postActionDescribeWarmPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}
