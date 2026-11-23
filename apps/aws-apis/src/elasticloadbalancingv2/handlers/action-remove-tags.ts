import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRemoveTagsRoute, postActionRemoveTagsRoute } from '../routes'

export const getActionRemoveTagsRouteHandler: RouteHandler<
  typeof getActionRemoveTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRemoveTagsRouteHandler: RouteHandler<
  typeof postActionRemoveTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
