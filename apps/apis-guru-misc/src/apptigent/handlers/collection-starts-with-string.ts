import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionStartsWithStringRoute } from '../routes'

export const postCollectionStartsWithStringRouteHandler: RouteHandler<
  typeof postCollectionStartsWithStringRoute
> = async (c) => {
  throw new Error('Not implemented')
}
