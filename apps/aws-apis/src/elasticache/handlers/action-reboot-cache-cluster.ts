import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRebootCacheClusterRoute, postActionRebootCacheClusterRoute } from '../routes'

export const getActionRebootCacheClusterRouteHandler: RouteHandler<
  typeof getActionRebootCacheClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRebootCacheClusterRouteHandler: RouteHandler<
  typeof postActionRebootCacheClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
