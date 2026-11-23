import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionFailoverDBClusterRoute, postActionFailoverDBClusterRoute } from '../routes'

export const getActionFailoverDBClusterRouteHandler: RouteHandler<
  typeof getActionFailoverDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionFailoverDBClusterRouteHandler: RouteHandler<
  typeof postActionFailoverDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
