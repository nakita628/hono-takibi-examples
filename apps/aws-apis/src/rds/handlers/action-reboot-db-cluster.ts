import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRebootDBClusterRoute, postActionRebootDBClusterRoute } from '../routes'

export const getActionRebootDBClusterRouteHandler: RouteHandler<
  typeof getActionRebootDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRebootDBClusterRouteHandler: RouteHandler<
  typeof postActionRebootDBClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
