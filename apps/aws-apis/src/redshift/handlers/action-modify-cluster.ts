import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyClusterRoute, postActionModifyClusterRoute } from '../routes'

export const getActionModifyClusterRouteHandler: RouteHandler<
  typeof getActionModifyClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyClusterRouteHandler: RouteHandler<
  typeof postActionModifyClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
