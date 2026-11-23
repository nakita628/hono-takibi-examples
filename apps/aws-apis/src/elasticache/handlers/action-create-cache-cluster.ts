import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateCacheClusterRoute, postActionCreateCacheClusterRoute } from '../routes'

export const getActionCreateCacheClusterRouteHandler: RouteHandler<
  typeof getActionCreateCacheClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateCacheClusterRouteHandler: RouteHandler<
  typeof postActionCreateCacheClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
