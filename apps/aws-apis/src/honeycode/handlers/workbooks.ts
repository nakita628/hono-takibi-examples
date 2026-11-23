import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWorkbooksWorkbookIdTablesRoute,
  getWorkbooksWorkbookIdTablesTableIdColumnsRoute,
  getWorkbooksWorkbookIdTablesTableIdImportJobIdRoute,
  postWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationIdRoute,
  postWorkbooksWorkbookIdTablesTableIdImportRoute,
  postWorkbooksWorkbookIdTablesTableIdRowsBatchcreateRoute,
  postWorkbooksWorkbookIdTablesTableIdRowsBatchdeleteRoute,
  postWorkbooksWorkbookIdTablesTableIdRowsBatchupdateRoute,
  postWorkbooksWorkbookIdTablesTableIdRowsBatchupsertRoute,
  postWorkbooksWorkbookIdTablesTableIdRowsListRoute,
  postWorkbooksWorkbookIdTablesTableIdRowsQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workbooksHandler = app
  .openapi(postWorkbooksWorkbookIdTablesTableIdRowsBatchcreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkbooksWorkbookIdTablesTableIdRowsBatchdeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkbooksWorkbookIdTablesTableIdRowsBatchupdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkbooksWorkbookIdTablesTableIdRowsBatchupsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkbooksWorkbookIdTablesTableIdImportJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkbooksWorkbookIdTablesTableIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkbooksWorkbookIdTablesTableIdRowsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkbooksWorkbookIdTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkbooksWorkbookIdTablesTableIdRowsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkbooksWorkbookIdTablesTableIdImportRoute, (c) => {
    throw new Error('Not implemented')
  })
