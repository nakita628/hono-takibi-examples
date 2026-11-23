import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionStartDBInstanceRoute, postActionStartDBInstanceRoute } from '../routes'

export const getActionStartDBInstanceRouteHandler: RouteHandler<
  typeof getActionStartDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStartDBInstanceRouteHandler: RouteHandler<
  typeof postActionStartDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
