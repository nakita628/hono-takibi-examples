import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeSubnetsRoute, postActionDescribeSubnetsRoute } from '../routes'

export const getActionDescribeSubnetsRouteHandler: RouteHandler<
  typeof getActionDescribeSubnetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSubnetsRouteHandler: RouteHandler<
  typeof postActionDescribeSubnetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
