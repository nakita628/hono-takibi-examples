import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsUpdateRoute } from '../routes'

export const postCollectionsUpdateRouteHandler: RouteHandler<
  typeof postCollectionsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
