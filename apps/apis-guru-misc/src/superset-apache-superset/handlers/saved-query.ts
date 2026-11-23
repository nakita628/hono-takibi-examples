import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSavedQueryIndexRoute,
  deleteSavedQueryPkRoute,
  getSavedQueryDistinctColumnNameRoute,
  getSavedQueryExportIndexRoute,
  getSavedQueryIndexRoute,
  getSavedQueryInfoRoute,
  getSavedQueryPkRoute,
  getSavedQueryRelatedColumnNameRoute,
  postSavedQueryImportIndexRoute,
  postSavedQueryIndexRoute,
  putSavedQueryPkRoute,
} from '../routes'

export const deleteSavedQueryIndexRouteHandler: RouteHandler<
  typeof deleteSavedQueryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSavedQueryIndexRouteHandler: RouteHandler<typeof getSavedQueryIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSavedQueryIndexRouteHandler: RouteHandler<
  typeof postSavedQueryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSavedQueryInfoRouteHandler: RouteHandler<typeof getSavedQueryInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSavedQueryDistinctColumnNameRouteHandler: RouteHandler<
  typeof getSavedQueryDistinctColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSavedQueryExportIndexRouteHandler: RouteHandler<
  typeof getSavedQueryExportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSavedQueryImportIndexRouteHandler: RouteHandler<
  typeof postSavedQueryImportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSavedQueryRelatedColumnNameRouteHandler: RouteHandler<
  typeof getSavedQueryRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSavedQueryPkRouteHandler: RouteHandler<typeof deleteSavedQueryPkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSavedQueryPkRouteHandler: RouteHandler<typeof getSavedQueryPkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSavedQueryPkRouteHandler: RouteHandler<typeof putSavedQueryPkRoute> = async (c) => {
  throw new Error('Not implemented')
}
