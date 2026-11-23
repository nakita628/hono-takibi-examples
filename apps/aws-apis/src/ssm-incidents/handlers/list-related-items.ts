import type { RouteHandler } from '@hono/zod-openapi'
import type { postListRelatedItemsRoute } from '../routes'

export const postListRelatedItemsRouteHandler: RouteHandler<
  typeof postListRelatedItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
