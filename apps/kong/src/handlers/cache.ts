import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteCacheKeyRoute, deleteCacheRoute, getCacheKeyRoute } from '../routes'

export const getCacheKeyRouteHandler: RouteHandler<typeof getCacheKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCacheKeyRouteHandler: RouteHandler<typeof deleteCacheKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCacheRouteHandler: RouteHandler<typeof deleteCacheRoute> = async (c) => {
  throw new Error('Not implemented')
}
