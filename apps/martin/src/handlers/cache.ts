import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteCacheSourceIdRoute } from '../routes'

export const deleteCacheSourceIdRouteHandler: RouteHandler<
  typeof deleteCacheSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
