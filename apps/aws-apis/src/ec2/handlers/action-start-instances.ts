import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionStartInstancesRoute, postActionStartInstancesRoute } from '../routes'

export const getActionStartInstancesRouteHandler: RouteHandler<
  typeof getActionStartInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStartInstancesRouteHandler: RouteHandler<
  typeof postActionStartInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
