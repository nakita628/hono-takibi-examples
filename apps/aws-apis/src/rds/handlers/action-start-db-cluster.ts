import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionStartDBClusterRoute, postActionStartDBClusterRoute } from '../routes'

export const getActionStartDBClusterRouteHandler: RouteHandler<
  typeof getActionStartDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStartDBClusterRouteHandler: RouteHandler<
  typeof postActionStartDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
