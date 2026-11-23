import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionStopDBInstanceRoute, postActionStopDBInstanceRoute } from '../routes'

export const getActionStopDBInstanceRouteHandler: RouteHandler<
  typeof getActionStopDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStopDBInstanceRouteHandler: RouteHandler<
  typeof postActionStopDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
