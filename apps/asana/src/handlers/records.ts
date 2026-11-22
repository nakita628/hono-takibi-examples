import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRecordsRecordGidRoute,
  getRecordsRecordGidRoute,
  getTablesTableGidRecordsRoute,
  getWorkspacesWorkspaceGidRecordsSearchRoute,
  postRecordsRoute,
  putRecordsRecordGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recordsHandler = app
  .openapi(getTablesTableGidRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidRecordsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordsRecordGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecordsRecordGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecordsRecordGidRoute, (c) => {
    throw new Error('Not implemented')
  })
