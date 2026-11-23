import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRebootInstancesRoute, postActionRebootInstancesRoute } from '../routes'

export const getActionRebootInstancesRouteHandler: RouteHandler<
  typeof getActionRebootInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRebootInstancesRouteHandler: RouteHandler<
  typeof postActionRebootInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
