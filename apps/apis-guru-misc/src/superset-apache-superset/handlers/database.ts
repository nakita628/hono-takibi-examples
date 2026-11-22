import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const databaseHandler = app
  .openapi(getDatabaseIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseAvailableIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseTestConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseValidateParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabasePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatabasePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasePkFunctionNamesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasePkRelatedObjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasePkSchemasIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasePkSelectStarTableNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasePkSelectStarTableNameSchemaNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasePkTableTableNameSchemaNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
