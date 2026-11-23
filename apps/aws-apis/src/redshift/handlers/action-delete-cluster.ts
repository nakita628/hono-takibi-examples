import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteClusterRoute, postActionDeleteClusterRoute } from '../routes'

export const getActionDeleteClusterRouteHandler: RouteHandler<
  typeof getActionDeleteClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteClusterRouteHandler: RouteHandler<
  typeof postActionDeleteClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
