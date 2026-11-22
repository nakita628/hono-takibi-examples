import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SavedQueryIndexRoute,
  deleteApiV1SavedQueryPkRoute,
  getApiV1QueryDistinctColumnNameRoute,
  getApiV1QueryIndexRoute,
  getApiV1QueryPkRoute,
  getApiV1QueryRelatedColumnNameRoute,
  getApiV1QueryUpdatedSinceRoute,
  getApiV1SavedQueryDistinctColumnNameRoute,
  getApiV1SavedQueryExportIndexRoute,
  getApiV1SavedQueryIndexRoute,
  getApiV1SavedQueryInfoRoute,
  getApiV1SavedQueryPkRoute,
  getApiV1SavedQueryRelatedColumnNameRoute,
  postApiV1QueryStopRoute,
  postApiV1SavedQueryImportIndexRoute,
  postApiV1SavedQueryIndexRoute,
  putApiV1SavedQueryPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queriesHandler = app
  .openapi(getApiV1QueryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QueryDistinctColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QueryRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1QueryStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QueryUpdatedSinceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QueryPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SavedQueryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SavedQueryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SavedQueryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SavedQueryInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SavedQueryDistinctColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SavedQueryExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SavedQueryImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SavedQueryRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SavedQueryPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SavedQueryPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SavedQueryPkRoute, (c) => {
    throw new Error('Not implemented')
  })
