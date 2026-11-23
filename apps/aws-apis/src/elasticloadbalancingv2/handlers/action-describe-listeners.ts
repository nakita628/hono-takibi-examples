import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeListenersRoute, postActionDescribeListenersRoute } from '../routes'

export const getActionDescribeListenersRouteHandler: RouteHandler<
  typeof getActionDescribeListenersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeListenersRouteHandler: RouteHandler<
  typeof postActionDescribeListenersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
