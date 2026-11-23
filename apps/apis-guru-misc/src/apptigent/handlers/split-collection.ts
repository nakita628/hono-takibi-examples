import type { RouteHandler } from '@hono/zod-openapi'
import type { postSplitCollectionRoute } from '../routes'

export const postSplitCollectionRouteHandler: RouteHandler<
  typeof postSplitCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
