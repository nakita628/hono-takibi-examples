import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionResizeClusterRoute, postActionResizeClusterRoute } from '../routes'

export const getActionResizeClusterRouteHandler: RouteHandler<
  typeof getActionResizeClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResizeClusterRouteHandler: RouteHandler<
  typeof postActionResizeClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
