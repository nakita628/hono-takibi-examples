import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeStorageRoute, postActionDescribeStorageRoute } from '../routes'

export const getActionDescribeStorageRouteHandler: RouteHandler<
  typeof getActionDescribeStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeStorageRouteHandler: RouteHandler<
  typeof postActionDescribeStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
