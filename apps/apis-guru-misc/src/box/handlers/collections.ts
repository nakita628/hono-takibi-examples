import type { RouteHandler } from '@hono/zod-openapi'
import type { getCollectionsCollectionIdItemsRoute, getCollectionsRoute } from '../routes'

export const getCollectionsRouteHandler: RouteHandler<typeof getCollectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionsCollectionIdItemsRouteHandler: RouteHandler<
  typeof getCollectionsCollectionIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
