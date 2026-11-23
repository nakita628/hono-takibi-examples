import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteCacheClusterRoute, postActionDeleteCacheClusterRoute } from '../routes'

export const getActionDeleteCacheClusterRouteHandler: RouteHandler<
  typeof getActionDeleteCacheClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteCacheClusterRouteHandler: RouteHandler<
  typeof postActionDeleteCacheClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
