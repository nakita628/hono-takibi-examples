import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCollectionsCollectionUidRoute,
  getCollectionsCollectionUidRoute,
  getCollectionsRoute,
  postCollectionsForkCollectionUidRoute,
  postCollectionsMergeRoute,
  postCollectionsRoute,
  putCollectionsCollectionUidRoute,
} from '../routes'

export const getCollectionsRouteHandler: RouteHandler<typeof getCollectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCollectionsRouteHandler: RouteHandler<typeof postCollectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCollectionsForkCollectionUidRouteHandler: RouteHandler<
  typeof postCollectionsForkCollectionUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCollectionsMergeRouteHandler: RouteHandler<
  typeof postCollectionsMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCollectionsCollectionUidRouteHandler: RouteHandler<
  typeof deleteCollectionsCollectionUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionsCollectionUidRouteHandler: RouteHandler<
  typeof getCollectionsCollectionUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCollectionsCollectionUidRouteHandler: RouteHandler<
  typeof putCollectionsCollectionUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
