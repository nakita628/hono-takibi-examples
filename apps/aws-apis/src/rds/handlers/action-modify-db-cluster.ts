import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyDBClusterRoute, postActionModifyDBClusterRoute } from '../routes'

export const getActionModifyDBClusterRouteHandler: RouteHandler<
  typeof getActionModifyDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyDBClusterRouteHandler: RouteHandler<
  typeof postActionModifyDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
