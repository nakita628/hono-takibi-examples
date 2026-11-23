import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPauseClusterRoute, postActionPauseClusterRoute } from '../routes'

export const getActionPauseClusterRouteHandler: RouteHandler<
  typeof getActionPauseClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPauseClusterRouteHandler: RouteHandler<
  typeof postActionPauseClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
