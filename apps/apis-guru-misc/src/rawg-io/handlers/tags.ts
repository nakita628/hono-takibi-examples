import type { RouteHandler } from '@hono/zod-openapi'
import type { getTagsIdRoute, getTagsRoute } from '../routes'

export const getTagsRouteHandler: RouteHandler<typeof getTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTagsIdRouteHandler: RouteHandler<typeof getTagsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
