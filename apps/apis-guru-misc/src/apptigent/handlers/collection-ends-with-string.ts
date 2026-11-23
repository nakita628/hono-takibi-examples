import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionEndsWithStringRoute } from '../routes'

export const postCollectionEndsWithStringRouteHandler: RouteHandler<
  typeof postCollectionEndsWithStringRoute
> = async (c) => {
  throw new Error('Not implemented')
}
