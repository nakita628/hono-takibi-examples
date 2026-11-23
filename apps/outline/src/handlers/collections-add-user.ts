import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsAddUserRoute } from '../routes'

export const postCollectionsAddUserRouteHandler: RouteHandler<
  typeof postCollectionsAddUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
