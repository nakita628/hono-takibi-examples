import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const savedQueryHandler = app
  .openapi(deleteSavedQueryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSavedQueryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSavedQueryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSavedQueryInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSavedQueryDistinctColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSavedQueryExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSavedQueryImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSavedQueryRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSavedQueryPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSavedQueryPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSavedQueryPkRoute, (c) => {
    throw new Error('Not implemented')
  })
