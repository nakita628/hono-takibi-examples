import type { RouteHandler } from '@hono/zod-openapi'
import type { getCacheRoute, getCacheValueRoute } from '../routes'

export const getCacheRouteHandler: RouteHandler<typeof getCacheRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCacheValueRouteHandler: RouteHandler<typeof getCacheValueRoute> = async (c) => {
  throw new Error('Not implemented')
}
