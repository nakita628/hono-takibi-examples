import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyDBInstanceRoute, postActionModifyDBInstanceRoute } from '../routes'

export const getActionModifyDBInstanceRouteHandler: RouteHandler<
  typeof getActionModifyDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyDBInstanceRouteHandler: RouteHandler<
  typeof postActionModifyDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
