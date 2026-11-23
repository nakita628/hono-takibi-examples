import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCollectionsCollectionIdItemsRoute,
  postCollectionsCollectionIdItemsRoute,
  postCollectionsRoute,
} from '../routes'

export const postCollectionsRouteHandler: RouteHandler<typeof postCollectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCollectionsCollectionIdItemsRouteHandler: RouteHandler<
  typeof postCollectionsCollectionIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCollectionsCollectionIdItemsRouteHandler: RouteHandler<
  typeof deleteCollectionsCollectionIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
