import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCollectionsCollectionIdArticlesRoute,
  getCollectionsCollectionIdRoute,
  getCollectionsCollectionIdVersionsRoute,
  getCollectionsCollectionIdVersionsVersionIdRoute,
  getCollectionsRoute,
  postCollectionsSearchRoute,
} from '../routes'

export const getCollectionsRouteHandler: RouteHandler<typeof getCollectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCollectionsSearchRouteHandler: RouteHandler<
  typeof postCollectionsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionsCollectionIdRouteHandler: RouteHandler<
  typeof getCollectionsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionsCollectionIdArticlesRouteHandler: RouteHandler<
  typeof getCollectionsCollectionIdArticlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionsCollectionIdVersionsRouteHandler: RouteHandler<
  typeof getCollectionsCollectionIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionsCollectionIdVersionsVersionIdRouteHandler: RouteHandler<
  typeof getCollectionsCollectionIdVersionsVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
