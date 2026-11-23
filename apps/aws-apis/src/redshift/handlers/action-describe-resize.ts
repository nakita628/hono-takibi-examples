import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeResizeRoute, postActionDescribeResizeRoute } from '../routes'

export const getActionDescribeResizeRouteHandler: RouteHandler<
  typeof getActionDescribeResizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeResizeRouteHandler: RouteHandler<
  typeof postActionDescribeResizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
