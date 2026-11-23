import type { RouteHandler } from '@hono/zod-openapi'
import type { postCartClearCacheJsonRoute } from '../routes'

export const postCartClearCacheJsonRouteHandler: RouteHandler<
  typeof postCartClearCacheJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
