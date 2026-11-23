import type { RouteHandler } from '@hono/zod-openapi'
import type { postCountCollectionRoute } from '../routes'

export const postCountCollectionRouteHandler: RouteHandler<
  typeof postCountCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
