import type { RouteHandler } from '@hono/zod-openapi'
import type { getCollectionCollectionIdRoute } from '../routes'

export const getCollectionCollectionIdRouteHandler: RouteHandler<
  typeof getCollectionCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
