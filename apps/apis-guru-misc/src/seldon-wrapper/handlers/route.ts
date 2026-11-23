import type { RouteHandler } from '@hono/zod-openapi'
import type { getRouteRoute, postRouteRoute } from '../routes'

export const getRouteRouteHandler: RouteHandler<typeof getRouteRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRouteRouteHandler: RouteHandler<typeof postRouteRoute> = async (c) => {
  throw new Error('Not implemented')
}
