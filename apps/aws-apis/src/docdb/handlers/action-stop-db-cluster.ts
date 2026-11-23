import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionStopDBClusterRoute, postActionStopDBClusterRoute } from '../routes'

export const getActionStopDBClusterRouteHandler: RouteHandler<
  typeof getActionStopDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStopDBClusterRouteHandler: RouteHandler<
  typeof postActionStopDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
