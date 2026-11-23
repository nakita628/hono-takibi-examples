import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteDBClusterRoute, postActionDeleteDBClusterRoute } from '../routes'

export const getActionDeleteDBClusterRouteHandler: RouteHandler<
  typeof getActionDeleteDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDBClusterRouteHandler: RouteHandler<
  typeof postActionDeleteDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
