import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateDBClusterRoute, postActionCreateDBClusterRoute } from '../routes'

export const getActionCreateDBClusterRouteHandler: RouteHandler<
  typeof getActionCreateDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDBClusterRouteHandler: RouteHandler<
  typeof postActionCreateDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
