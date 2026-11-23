import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateRouteRoute, postActionCreateRouteRoute } from '../routes'

export const getActionCreateRouteRouteHandler: RouteHandler<
  typeof getActionCreateRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateRouteRouteHandler: RouteHandler<
  typeof postActionCreateRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
