import type { RouteHandler } from '@hono/zod-openapi'
import type { getTagRoute, postTagRemoveRoute } from '../routes'

export const getTagRouteHandler: RouteHandler<typeof getTagRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTagRemoveRouteHandler: RouteHandler<typeof postTagRemoveRoute> = async (c) => {
  throw new Error('Not implemented')
}
