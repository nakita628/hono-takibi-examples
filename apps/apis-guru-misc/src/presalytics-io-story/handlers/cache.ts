import type { RouteHandler } from '@hono/zod-openapi'
import type { getCacheNonceRoute, postCacheRoute } from '../routes'

export const postCacheRouteHandler: RouteHandler<typeof postCacheRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCacheNonceRouteHandler: RouteHandler<typeof getCacheNonceRoute> = async (c) => {
  throw new Error('Not implemented')
}
