import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionContainsNumberRoute } from '../routes'

export const postCollectionContainsNumberRouteHandler: RouteHandler<
  typeof postCollectionContainsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
