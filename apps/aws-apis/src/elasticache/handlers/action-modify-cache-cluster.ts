import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyCacheClusterRoute, postActionModifyCacheClusterRoute } from '../routes'

export const getActionModifyCacheClusterRouteHandler: RouteHandler<
  typeof getActionModifyCacheClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyCacheClusterRouteHandler: RouteHandler<
  typeof postActionModifyCacheClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
