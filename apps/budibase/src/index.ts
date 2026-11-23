import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsAppIdRoute,
  deleteTablesTableIdRoute,
  deleteTablesTableIdRowsRowIdRoute,
  deleteUsersUserIdRoute,
  deleteViewsViewIdRoute,
  deleteWorkspacesWorkspaceIdRoute,
  getApplicationsAppIdRoute,
  getMetricsRoute,
  getTablesTableIdRoute,
  getTablesTableIdRowsRowIdRoute,
  getUsersUserIdRoute,
  getViewsViewIdRoute,
  getWorkspacesWorkspaceIdGroupsRoute,
  getWorkspacesWorkspaceIdRoute,
  postApplicationsAppIdExportRoute,
  postApplicationsAppIdImportRoute,
  postApplicationsAppIdPublishRoute,
  postApplicationsAppIdUnpublishRoute,
  postApplicationsRoute,
  postApplicationsSearchRoute,
  postQueriesQueryIdRoute,
  postQueriesSearchRoute,
  postRolesAssignRoute,
  postRolesUnassignRoute,
  postTablesRoute,
  postTablesSearchRoute,
  postTablesTableIdRowsRoute,
  postTablesTableIdRowsSearchRoute,
  postUsersRoute,
  postUsersSearchRoute,
  postViewsRoute,
  postViewsSearchRoute,
  postViewsViewIdRowsSearchRoute,
  postWorkspacesRoute,
  postWorkspacesSearchRoute,
  postWorkspacesWorkspaceIdExportRoute,
  postWorkspacesWorkspaceIdImportRoute,
  postWorkspacesWorkspaceIdPublishRoute,
  postWorkspacesWorkspaceIdUnpublishRoute,
  putApplicationsAppIdRoute,
  putTablesTableIdRoute,
  putTablesTableIdRowsRowIdRoute,
  putUsersUserIdRoute,
  putViewsViewIdRoute,
  putWorkspacesWorkspaceIdRoute,
} from './routes'
import {
  deleteApplicationsAppIdRouteHandler,
  deleteTablesTableIdRouteHandler,
  deleteTablesTableIdRowsRowIdRouteHandler,
  deleteUsersUserIdRouteHandler,
  deleteViewsViewIdRouteHandler,
  deleteWorkspacesWorkspaceIdRouteHandler,
  getApplicationsAppIdRouteHandler,
  getMetricsRouteHandler,
  getTablesTableIdRouteHandler,
  getTablesTableIdRowsRowIdRouteHandler,
  getUsersUserIdRouteHandler,
  getViewsViewIdRouteHandler,
  getWorkspacesWorkspaceIdGroupsRouteHandler,
  getWorkspacesWorkspaceIdRouteHandler,
  postApplicationsAppIdExportRouteHandler,
  postApplicationsAppIdImportRouteHandler,
  postApplicationsAppIdPublishRouteHandler,
  postApplicationsAppIdUnpublishRouteHandler,
  postApplicationsRouteHandler,
  postApplicationsSearchRouteHandler,
  postQueriesQueryIdRouteHandler,
  postQueriesSearchRouteHandler,
  postRolesAssignRouteHandler,
  postRolesUnassignRouteHandler,
  postTablesRouteHandler,
  postTablesSearchRouteHandler,
  postTablesTableIdRowsRouteHandler,
  postTablesTableIdRowsSearchRouteHandler,
  postUsersRouteHandler,
  postUsersSearchRouteHandler,
  postViewsRouteHandler,
  postViewsSearchRouteHandler,
  postViewsViewIdRowsSearchRouteHandler,
  postWorkspacesRouteHandler,
  postWorkspacesSearchRouteHandler,
  postWorkspacesWorkspaceIdExportRouteHandler,
  postWorkspacesWorkspaceIdImportRouteHandler,
  postWorkspacesWorkspaceIdPublishRouteHandler,
  postWorkspacesWorkspaceIdUnpublishRouteHandler,
  putApplicationsAppIdRouteHandler,
  putTablesTableIdRouteHandler,
  putTablesTableIdRowsRowIdRouteHandler,
  putUsersUserIdRouteHandler,
  putViewsViewIdRouteHandler,
  putWorkspacesWorkspaceIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApplicationsRoute, postApplicationsRouteHandler)
  .openapi(putApplicationsAppIdRoute, putApplicationsAppIdRouteHandler)
  .openapi(deleteApplicationsAppIdRoute, deleteApplicationsAppIdRouteHandler)
  .openapi(getApplicationsAppIdRoute, getApplicationsAppIdRouteHandler)
  .openapi(postApplicationsAppIdUnpublishRoute, postApplicationsAppIdUnpublishRouteHandler)
  .openapi(postApplicationsAppIdPublishRoute, postApplicationsAppIdPublishRouteHandler)
  .openapi(postApplicationsAppIdImportRoute, postApplicationsAppIdImportRouteHandler)
  .openapi(postApplicationsAppIdExportRoute, postApplicationsAppIdExportRouteHandler)
  .openapi(postApplicationsSearchRoute, postApplicationsSearchRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(postQueriesQueryIdRoute, postQueriesQueryIdRouteHandler)
  .openapi(postQueriesSearchRoute, postQueriesSearchRouteHandler)
  .openapi(postRolesAssignRoute, postRolesAssignRouteHandler)
  .openapi(postRolesUnassignRoute, postRolesUnassignRouteHandler)
  .openapi(postTablesTableIdRowsRoute, postTablesTableIdRowsRouteHandler)
  .openapi(putTablesTableIdRowsRowIdRoute, putTablesTableIdRowsRowIdRouteHandler)
  .openapi(deleteTablesTableIdRowsRowIdRoute, deleteTablesTableIdRowsRowIdRouteHandler)
  .openapi(getTablesTableIdRowsRowIdRoute, getTablesTableIdRowsRowIdRouteHandler)
  .openapi(postTablesTableIdRowsSearchRoute, postTablesTableIdRowsSearchRouteHandler)
  .openapi(postTablesRoute, postTablesRouteHandler)
  .openapi(putTablesTableIdRoute, putTablesTableIdRouteHandler)
  .openapi(deleteTablesTableIdRoute, deleteTablesTableIdRouteHandler)
  .openapi(getTablesTableIdRoute, getTablesTableIdRouteHandler)
  .openapi(postTablesSearchRoute, postTablesSearchRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(putUsersUserIdRoute, putUsersUserIdRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(postUsersSearchRoute, postUsersSearchRouteHandler)
  .openapi(postViewsRoute, postViewsRouteHandler)
  .openapi(putViewsViewIdRoute, putViewsViewIdRouteHandler)
  .openapi(deleteViewsViewIdRoute, deleteViewsViewIdRouteHandler)
  .openapi(getViewsViewIdRoute, getViewsViewIdRouteHandler)
  .openapi(postViewsSearchRoute, postViewsSearchRouteHandler)
  .openapi(postViewsViewIdRowsSearchRoute, postViewsViewIdRowsSearchRouteHandler)
  .openapi(postWorkspacesRoute, postWorkspacesRouteHandler)
  .openapi(putWorkspacesWorkspaceIdRoute, putWorkspacesWorkspaceIdRouteHandler)
  .openapi(deleteWorkspacesWorkspaceIdRoute, deleteWorkspacesWorkspaceIdRouteHandler)
  .openapi(getWorkspacesWorkspaceIdRoute, getWorkspacesWorkspaceIdRouteHandler)
  .openapi(postWorkspacesWorkspaceIdPublishRoute, postWorkspacesWorkspaceIdPublishRouteHandler)
  .openapi(postWorkspacesWorkspaceIdUnpublishRoute, postWorkspacesWorkspaceIdUnpublishRouteHandler)
  .openapi(postWorkspacesWorkspaceIdImportRoute, postWorkspacesWorkspaceIdImportRouteHandler)
  .openapi(postWorkspacesWorkspaceIdExportRoute, postWorkspacesWorkspaceIdExportRouteHandler)
  .openapi(getWorkspacesWorkspaceIdGroupsRoute, getWorkspacesWorkspaceIdGroupsRouteHandler)
  .openapi(postWorkspacesSearchRoute, postWorkspacesSearchRouteHandler)

export default app
