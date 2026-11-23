import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeEventsRoute, postActionDescribeEventsRoute } from '../routes'

export const getActionDescribeEventsRouteHandler: RouteHandler<
  typeof getActionDescribeEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeEventsRouteHandler: RouteHandler<
  typeof postActionDescribeEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
