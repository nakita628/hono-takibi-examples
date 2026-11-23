import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUtilsRandomStringRoute,
  postUtilsCacheClearRoute,
  postUtilsExportCollectionRoute,
  postUtilsImportCollectionRoute,
  postUtilsImportRoute,
  postUtilsSortCollectionRoute,
} from '../routes'

export const postUtilsSortCollectionRouteHandler: RouteHandler<
  typeof postUtilsSortCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUtilsImportRouteHandler: RouteHandler<typeof postUtilsImportRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUtilsImportCollectionRouteHandler: RouteHandler<
  typeof postUtilsImportCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUtilsExportCollectionRouteHandler: RouteHandler<
  typeof postUtilsExportCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUtilsCacheClearRouteHandler: RouteHandler<
  typeof postUtilsCacheClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUtilsRandomStringRouteHandler: RouteHandler<
  typeof getUtilsRandomStringRoute
> = async (c) => {
  throw new Error('Not implemented')
}
