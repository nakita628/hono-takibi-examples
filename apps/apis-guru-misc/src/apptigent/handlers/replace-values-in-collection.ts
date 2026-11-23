import type { RouteHandler } from '@hono/zod-openapi'
import type { postReplaceValuesInCollectionRoute } from '../routes'

export const postReplaceValuesInCollectionRouteHandler: RouteHandler<
  typeof postReplaceValuesInCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
