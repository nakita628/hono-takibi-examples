import type { RouteHandler } from '@hono/zod-openapi'
import type { postSortCollectionRoute } from '../routes'

export const postSortCollectionRouteHandler: RouteHandler<typeof postSortCollectionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
