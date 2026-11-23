import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteRouteRoute, postActionDeleteRouteRoute } from '../routes'

export const getActionDeleteRouteRouteHandler: RouteHandler<
  typeof getActionDeleteRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteRouteRouteHandler: RouteHandler<
  typeof postActionDeleteRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
