import type { RouteHandler } from '@hono/zod-openapi'
import type { getTagsRoute, getTagsTagsRoute } from '../routes'

export const getTagsRouteHandler: RouteHandler<typeof getTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTagsTagsRouteHandler: RouteHandler<typeof getTagsTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}
