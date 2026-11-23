import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateRelatedItemsRoute } from '../routes'

export const postUpdateRelatedItemsRouteHandler: RouteHandler<
  typeof postUpdateRelatedItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
