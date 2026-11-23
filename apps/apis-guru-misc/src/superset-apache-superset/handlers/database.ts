import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDatabasePkRoute,
  getDatabaseAvailableIndexRoute,
  getDatabaseExportIndexRoute,
  getDatabaseIndexRoute,
  getDatabaseInfoRoute,
  getDatabasePkFunctionNamesIndexRoute,
  getDatabasePkRelatedObjectsIndexRoute,
  getDatabasePkRoute,
  getDatabasePkSchemasIndexRoute,
  getDatabasePkSelectStarTableNameIndexRoute,
  getDatabasePkSelectStarTableNameSchemaNameIndexRoute,
  getDatabasePkTableTableNameSchemaNameIndexRoute,
  postDatabaseImportIndexRoute,
  postDatabaseIndexRoute,
  postDatabaseTestConnectionRoute,
  postDatabaseValidateParametersRoute,
  putDatabasePkRoute,
} from '../routes'

export const getDatabaseIndexRouteHandler: RouteHandler<typeof getDatabaseIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDatabaseIndexRouteHandler: RouteHandler<typeof postDatabaseIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDatabaseInfoRouteHandler: RouteHandler<typeof getDatabaseInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatabaseAvailableIndexRouteHandler: RouteHandler<
  typeof getDatabaseAvailableIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatabaseExportIndexRouteHandler: RouteHandler<
  typeof getDatabaseExportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDatabaseImportIndexRouteHandler: RouteHandler<
  typeof postDatabaseImportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDatabaseTestConnectionRouteHandler: RouteHandler<
  typeof postDatabaseTestConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDatabaseValidateParametersRouteHandler: RouteHandler<
  typeof postDatabaseValidateParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDatabasePkRouteHandler: RouteHandler<typeof deleteDatabasePkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDatabasePkRouteHandler: RouteHandler<typeof getDatabasePkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putDatabasePkRouteHandler: RouteHandler<typeof putDatabasePkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatabasePkFunctionNamesIndexRouteHandler: RouteHandler<
  typeof getDatabasePkFunctionNamesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatabasePkRelatedObjectsIndexRouteHandler: RouteHandler<
  typeof getDatabasePkRelatedObjectsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatabasePkSchemasIndexRouteHandler: RouteHandler<
  typeof getDatabasePkSchemasIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatabasePkSelectStarTableNameIndexRouteHandler: RouteHandler<
  typeof getDatabasePkSelectStarTableNameIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatabasePkSelectStarTableNameSchemaNameIndexRouteHandler: RouteHandler<
  typeof getDatabasePkSelectStarTableNameSchemaNameIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatabasePkTableTableNameSchemaNameIndexRouteHandler: RouteHandler<
  typeof getDatabasePkTableTableNameSchemaNameIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
