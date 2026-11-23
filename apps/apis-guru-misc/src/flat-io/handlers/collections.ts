import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCollectionsCollectionRoute,
  deleteCollectionsCollectionScoresScoreRoute,
  getCollectionsCollectionRoute,
  getCollectionsCollectionScoresRoute,
  getCollectionsRoute,
  postCollectionsCollectionUntrashRoute,
  postCollectionsRoute,
  putCollectionsCollectionRoute,
  putCollectionsCollectionScoresScoreRoute,
} from '../routes'

export const getCollectionsRouteHandler: RouteHandler<typeof getCollectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCollectionsRouteHandler: RouteHandler<typeof postCollectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCollectionsCollectionRouteHandler: RouteHandler<
  typeof deleteCollectionsCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionsCollectionRouteHandler: RouteHandler<
  typeof getCollectionsCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCollectionsCollectionRouteHandler: RouteHandler<
  typeof putCollectionsCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionsCollectionScoresRouteHandler: RouteHandler<
  typeof getCollectionsCollectionScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCollectionsCollectionScoresScoreRouteHandler: RouteHandler<
  typeof deleteCollectionsCollectionScoresScoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCollectionsCollectionScoresScoreRouteHandler: RouteHandler<
  typeof putCollectionsCollectionScoresScoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCollectionsCollectionUntrashRouteHandler: RouteHandler<
  typeof postCollectionsCollectionUntrashRoute
> = async (c) => {
  throw new Error('Not implemented')
}
