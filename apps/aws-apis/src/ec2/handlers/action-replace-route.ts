import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionReplaceRouteRoute, postActionReplaceRouteRoute } from '../routes'

export const getActionReplaceRouteRouteHandler: RouteHandler<
  typeof getActionReplaceRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionReplaceRouteRouteHandler: RouteHandler<
  typeof postActionReplaceRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
