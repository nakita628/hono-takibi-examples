import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRunInstancesRoute, postActionRunInstancesRoute } from '../routes'

export const getActionRunInstancesRouteHandler: RouteHandler<
  typeof getActionRunInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRunInstancesRouteHandler: RouteHandler<
  typeof postActionRunInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
