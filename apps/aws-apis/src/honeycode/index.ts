import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  getTagsResourceArnRoute,
  getWorkbooksWorkbookIdTablesRoute,
  getWorkbooksWorkbookIdTablesTableIdColumnsRoute,
  getWorkbooksWorkbookIdTablesTableIdImportJobIdRoute,
  postScreendataRoute,
  postTagsResourceArnRoute,
  postWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationIdRoute,
  postWorkbooksWorkbookIdTablesTableIdImportRoute,
  postWorkbooksWorkbookIdTablesTableIdRowsBatchcreateRoute,
  postWorkbooksWorkbookIdTablesTableIdRowsBatchdeleteRoute,
  postWorkbooksWorkbookIdTablesTableIdRowsBatchupdateRoute,
  postWorkbooksWorkbookIdTablesTableIdRowsBatchupsertRoute,
  postWorkbooksWorkbookIdTablesTableIdRowsListRoute,
  postWorkbooksWorkbookIdTablesTableIdRowsQueryRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  getTagsResourceArnRouteHandler,
  getWorkbooksWorkbookIdTablesRouteHandler,
  getWorkbooksWorkbookIdTablesTableIdColumnsRouteHandler,
  getWorkbooksWorkbookIdTablesTableIdImportJobIdRouteHandler,
  postScreendataRouteHandler,
  postTagsResourceArnRouteHandler,
  postWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationIdRouteHandler,
  postWorkbooksWorkbookIdTablesTableIdImportRouteHandler,
  postWorkbooksWorkbookIdTablesTableIdRowsBatchcreateRouteHandler,
  postWorkbooksWorkbookIdTablesTableIdRowsBatchdeleteRouteHandler,
  postWorkbooksWorkbookIdTablesTableIdRowsBatchupdateRouteHandler,
  postWorkbooksWorkbookIdTablesTableIdRowsBatchupsertRouteHandler,
  postWorkbooksWorkbookIdTablesTableIdRowsListRouteHandler,
  postWorkbooksWorkbookIdTablesTableIdRowsQueryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postWorkbooksWorkbookIdTablesTableIdRowsBatchcreateRoute,
    postWorkbooksWorkbookIdTablesTableIdRowsBatchcreateRouteHandler,
  )
  .openapi(
    postWorkbooksWorkbookIdTablesTableIdRowsBatchdeleteRoute,
    postWorkbooksWorkbookIdTablesTableIdRowsBatchdeleteRouteHandler,
  )
  .openapi(
    postWorkbooksWorkbookIdTablesTableIdRowsBatchupdateRoute,
    postWorkbooksWorkbookIdTablesTableIdRowsBatchupdateRouteHandler,
  )
  .openapi(
    postWorkbooksWorkbookIdTablesTableIdRowsBatchupsertRoute,
    postWorkbooksWorkbookIdTablesTableIdRowsBatchupsertRouteHandler,
  )
  .openapi(
    getWorkbooksWorkbookIdTablesTableIdImportJobIdRoute,
    getWorkbooksWorkbookIdTablesTableIdImportJobIdRouteHandler,
  )
  .openapi(postScreendataRoute, postScreendataRouteHandler)
  .openapi(
    postWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationIdRoute,
    postWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationIdRouteHandler,
  )
  .openapi(
    getWorkbooksWorkbookIdTablesTableIdColumnsRoute,
    getWorkbooksWorkbookIdTablesTableIdColumnsRouteHandler,
  )
  .openapi(
    postWorkbooksWorkbookIdTablesTableIdRowsListRoute,
    postWorkbooksWorkbookIdTablesTableIdRowsListRouteHandler,
  )
  .openapi(getWorkbooksWorkbookIdTablesRoute, getWorkbooksWorkbookIdTablesRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(
    postWorkbooksWorkbookIdTablesTableIdRowsQueryRoute,
    postWorkbooksWorkbookIdTablesTableIdRowsQueryRouteHandler,
  )
  .openapi(
    postWorkbooksWorkbookIdTablesTableIdImportRoute,
    postWorkbooksWorkbookIdTablesTableIdImportRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
