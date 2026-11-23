import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteCacheKeyRoute } from '../routes'

export const deleteCacheKeyRouteHandler: RouteHandler<typeof deleteCacheKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}
