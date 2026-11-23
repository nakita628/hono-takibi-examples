import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDetachInstancesRoute, postActionDetachInstancesRoute } from '../routes'

export const getActionDetachInstancesRouteHandler: RouteHandler<
  typeof getActionDetachInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetachInstancesRouteHandler: RouteHandler<
  typeof postActionDetachInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
