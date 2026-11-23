import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateTableObjectsRoute } from '../routes'

export const postUpdateTableObjectsRouteHandler: RouteHandler<
  typeof postUpdateTableObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
