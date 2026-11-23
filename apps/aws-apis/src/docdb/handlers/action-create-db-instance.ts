import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateDBInstanceRoute, postActionCreateDBInstanceRoute } from '../routes'

export const getActionCreateDBInstanceRouteHandler: RouteHandler<
  typeof getActionCreateDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDBInstanceRouteHandler: RouteHandler<
  typeof postActionCreateDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
