import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionBacktrackDBClusterRoute, postActionBacktrackDBClusterRoute } from '../routes'

export const getActionBacktrackDBClusterRouteHandler: RouteHandler<
  typeof getActionBacktrackDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionBacktrackDBClusterRouteHandler: RouteHandler<
  typeof postActionBacktrackDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
