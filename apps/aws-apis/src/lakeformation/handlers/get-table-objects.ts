import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetTableObjectsRoute } from '../routes'

export const postGetTableObjectsRouteHandler: RouteHandler<
  typeof postGetTableObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
