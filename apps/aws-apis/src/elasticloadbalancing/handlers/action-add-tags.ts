import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAddTagsRoute, postActionAddTagsRoute } from '../routes'

export const getActionAddTagsRouteHandler: RouteHandler<typeof getActionAddTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionAddTagsRouteHandler: RouteHandler<typeof postActionAddTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
