import type { RouteHandler } from '@hono/zod-openapi'
import type { getCollectionsCollectionSlugRoute, getCollectionsRoute } from '../routes'

export const getCollectionsRouteHandler: RouteHandler<typeof getCollectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionsCollectionSlugRouteHandler: RouteHandler<
  typeof getCollectionsCollectionSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}
