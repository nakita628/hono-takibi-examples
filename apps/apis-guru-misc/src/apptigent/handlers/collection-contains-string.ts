import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionContainsStringRoute } from '../routes'

export const postCollectionContainsStringRouteHandler: RouteHandler<
  typeof postCollectionContainsStringRoute
> = async (c) => {
  throw new Error('Not implemented')
}
