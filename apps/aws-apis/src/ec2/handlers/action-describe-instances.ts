import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeInstancesRoute, postActionDescribeInstancesRoute } from '../routes'

export const getActionDescribeInstancesRouteHandler: RouteHandler<
  typeof getActionDescribeInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeInstancesRouteHandler: RouteHandler<
  typeof postActionDescribeInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
