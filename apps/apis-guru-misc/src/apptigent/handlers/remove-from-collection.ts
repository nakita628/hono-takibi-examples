import type { RouteHandler } from '@hono/zod-openapi'
import type { postRemoveFromCollectionRoute } from '../routes'

export const postRemoveFromCollectionRouteHandler: RouteHandler<
  typeof postRemoveFromCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
