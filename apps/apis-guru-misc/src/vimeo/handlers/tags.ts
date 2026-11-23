import type { RouteHandler } from '@hono/zod-openapi'
import type { getTagsWordRoute, getTagsWordVideosRoute } from '../routes'

export const getTagsWordRouteHandler: RouteHandler<typeof getTagsWordRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTagsWordVideosRouteHandler: RouteHandler<typeof getTagsWordVideosRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
