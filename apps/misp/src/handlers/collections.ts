import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCollectionsDeleteCollectionIdRoute,
  getCollectionsViewCollectionIdRoute,
  postCollectionsAddRoute,
  postCollectionsEditCollectionIdRoute,
  postCollectionsIndexFilterRoute,
} from '../routes'

export const postCollectionsAddRouteHandler: RouteHandler<typeof postCollectionsAddRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCollectionsEditCollectionIdRouteHandler: RouteHandler<
  typeof postCollectionsEditCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCollectionsDeleteCollectionIdRouteHandler: RouteHandler<
  typeof deleteCollectionsDeleteCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionsViewCollectionIdRouteHandler: RouteHandler<
  typeof getCollectionsViewCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCollectionsIndexFilterRouteHandler: RouteHandler<
  typeof postCollectionsIndexFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
