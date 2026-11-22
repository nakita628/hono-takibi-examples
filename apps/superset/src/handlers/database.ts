import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1DatabasePkRoute,
  getApiV1DatabaseAvailableIndexRoute,
  getApiV1DatabaseExportIndexRoute,
  getApiV1DatabaseIndexRoute,
  getApiV1DatabaseInfoRoute,
  getApiV1DatabaseOauth2IndexRoute,
  getApiV1DatabasePkCatalogsIndexRoute,
  getApiV1DatabasePkConnectionRoute,
  getApiV1DatabasePkEncryptedExtraHintsIndexRoute,
  getApiV1DatabasePkFunctionNamesIndexRoute,
  getApiV1DatabasePkOauth2TokensIndexRoute,
  getApiV1DatabasePkRelatedObjectsIndexRoute,
  getApiV1DatabasePkRoute,
  getApiV1DatabasePkSchemasAccessForFileUploadIndexRoute,
  getApiV1DatabasePkSchemasIndexRoute,
  getApiV1DatabasePkSelectStarTableNameIndexRoute,
  getApiV1DatabasePkSelectStarTableNameSchemaNameIndexRoute,
  getApiV1DatabasePkTableExtraTableNameSchemaNameIndexRoute,
  getApiV1DatabasePkTableMetadataExtraIndexRoute,
  getApiV1DatabasePkTableMetadataIndexRoute,
  getApiV1DatabasePkTablesIndexRoute,
  getApiV1DatabasePkTableTableNameSchemaNameIndexRoute,
  getApiV1DatabaseRelatedColumnNameRoute,
  postApiV1DatabaseImportIndexRoute,
  postApiV1DatabaseIndexRoute,
  postApiV1DatabasePkOauth2TokensAllIndexRoute,
  postApiV1DatabasePkOauth2TokensDeleteIndexRoute,
  postApiV1DatabasePkSyncPermissionsIndexRoute,
  postApiV1DatabasePkUploadIndexRoute,
  postApiV1DatabasePkValidateSqlIndexRoute,
  postApiV1DatabaseTestConnectionIndexRoute,
  postApiV1DatabaseUploadMetadataIndexRoute,
  postApiV1DatabaseValidateParametersIndexRoute,
  putApiV1DatabasePkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databaseHandler = app
  .openapi(getApiV1DatabaseIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabaseIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabaseInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabaseAvailableIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabaseExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabaseImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabaseOauth2IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabaseRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabaseTestConnectionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabaseUploadMetadataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabaseValidateParametersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DatabasePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DatabasePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkCatalogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkEncryptedExtraHintsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkFunctionNamesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkOauth2TokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabasePkOauth2TokensAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabasePkOauth2TokensDeleteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkRelatedObjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkSchemasIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkSchemasAccessForFileUploadIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkSelectStarTableNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkSelectStarTableNameSchemaNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabasePkSyncPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkTableTableNameSchemaNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkTableExtraTableNameSchemaNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkTableMetadataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkTableMetadataExtraIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkTablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabasePkUploadIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabasePkValidateSqlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
