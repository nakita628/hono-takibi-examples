import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteDBInstanceRoute, postActionDeleteDBInstanceRoute } from '../routes'

export const getActionDeleteDBInstanceRouteHandler: RouteHandler<
  typeof getActionDeleteDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDBInstanceRouteHandler: RouteHandler<
  typeof postActionDeleteDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
