import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCollectionsCollectionIdItemsRoute,
  getCollectionsCollectionIdRoute,
  getCollectionsRoute,
} from '../routes'

export const getCollectionsRouteHandler: RouteHandler<typeof getCollectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionsCollectionIdItemsRouteHandler: RouteHandler<
  typeof getCollectionsCollectionIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionsCollectionIdRouteHandler: RouteHandler<
  typeof getCollectionsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
