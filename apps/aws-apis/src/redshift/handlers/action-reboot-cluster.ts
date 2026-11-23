import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRebootClusterRoute, postActionRebootClusterRoute } from '../routes'

export const getActionRebootClusterRouteHandler: RouteHandler<
  typeof getActionRebootClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRebootClusterRouteHandler: RouteHandler<
  typeof postActionRebootClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
