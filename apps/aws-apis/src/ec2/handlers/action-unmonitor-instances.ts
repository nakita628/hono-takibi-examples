import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUnmonitorInstancesRoute, postActionUnmonitorInstancesRoute } from '../routes'

export const getActionUnmonitorInstancesRouteHandler: RouteHandler<
  typeof getActionUnmonitorInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUnmonitorInstancesRouteHandler: RouteHandler<
  typeof postActionUnmonitorInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
