import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ReferenceTablesTablesIdRoute,
  deleteApiV2ReferenceTablesTablesIdRowsRoute,
  getApiV2ReferenceTablesTablesIdRoute,
  getApiV2ReferenceTablesTablesIdRowsListRoute,
  getApiV2ReferenceTablesTablesIdRowsRoute,
  getApiV2ReferenceTablesTablesRoute,
  patchApiV2ReferenceTablesTablesIdRoute,
  postApiV2ReferenceTablesQueriesBatchRowsRoute,
  postApiV2ReferenceTablesTablesIdRowsRoute,
  postApiV2ReferenceTablesTablesRoute,
  postApiV2ReferenceTablesUploadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const referenceTablesHandler = app
  .openapi(postApiV2ReferenceTablesQueriesBatchRowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReferenceTablesTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ReferenceTablesTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ReferenceTablesTablesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReferenceTablesTablesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ReferenceTablesTablesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ReferenceTablesTablesIdRowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReferenceTablesTablesIdRowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ReferenceTablesTablesIdRowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReferenceTablesTablesIdRowsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ReferenceTablesUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
