import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4BulkImportsEntitiesRoute,
  getApiV4BulkImportsImportIdEntitiesEntityIdFailuresRoute,
  getApiV4BulkImportsImportIdEntitiesEntityIdRoute,
  getApiV4BulkImportsImportIdEntitiesRoute,
  getApiV4BulkImportsImportIdRoute,
  getApiV4BulkImportsRoute,
  postApiV4BulkImportsImportIdCancelRoute,
  postApiV4BulkImportsRoute,
  postApiV4ImportGithubGistsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importsHandler = app
  .openapi(postApiV4ImportGithubGistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4BulkImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4BulkImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4BulkImportsEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4BulkImportsImportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4BulkImportsImportIdEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4BulkImportsImportIdEntitiesEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4BulkImportsImportIdEntitiesEntityIdFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4BulkImportsImportIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
