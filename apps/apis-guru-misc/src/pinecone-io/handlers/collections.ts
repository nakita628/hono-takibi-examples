import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCollectionsCollectionNameRoute,
  getCollectionsCollectionNameRoute,
  getCollectionsRoute,
  postCollectionsRoute,
} from '../routes'

export const getCollectionsRouteHandler: RouteHandler<typeof getCollectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCollectionsRouteHandler: RouteHandler<typeof postCollectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCollectionsCollectionNameRouteHandler: RouteHandler<
  typeof deleteCollectionsCollectionNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionsCollectionNameRouteHandler: RouteHandler<
  typeof getCollectionsCollectionNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
