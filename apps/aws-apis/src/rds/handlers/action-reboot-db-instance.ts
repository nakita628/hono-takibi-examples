import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRebootDBInstanceRoute, postActionRebootDBInstanceRoute } from '../routes'

export const getActionRebootDBInstanceRouteHandler: RouteHandler<
  typeof getActionRebootDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRebootDBInstanceRouteHandler: RouteHandler<
  typeof postActionRebootDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
