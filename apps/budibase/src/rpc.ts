import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApplications(
  args: InferRequestType<typeof client.applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications.$post(args, options))
}

export async function getApplicationsAppId(
  args: InferRequestType<(typeof client.applications)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':appId'].$get(args, options))
}

export async function putApplicationsAppId(
  args: InferRequestType<(typeof client.applications)[':appId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':appId'].$put(args, options))
}

export async function deleteApplicationsAppId(
  args: InferRequestType<(typeof client.applications)[':appId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':appId'].$delete(args, options))
}

export async function postApplicationsAppIdUnpublish(
  args: InferRequestType<(typeof client.applications)[':appId']['unpublish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':appId'].unpublish.$post(args, options))
}

export async function postApplicationsAppIdPublish(
  args: InferRequestType<(typeof client.applications)[':appId']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':appId'].publish.$post(args, options))
}

export async function postApplicationsAppIdImport(
  args: InferRequestType<(typeof client.applications)[':appId']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':appId'].import.$post(args, options))
}

export async function postApplicationsAppIdExport(
  args: InferRequestType<(typeof client.applications)[':appId']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':appId'].export.$post(args, options))
}

export async function postApplicationsSearch(
  args: InferRequestType<typeof client.applications.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications.search.$post(args, options))
}

export async function getMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.$get(undefined, options))
}

export async function postQueriesQueryId(
  args: InferRequestType<(typeof client.queries)[':queryId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries[':queryId'].$post(args, options))
}

export async function postQueriesSearch(
  args: InferRequestType<typeof client.queries.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries.search.$post(args, options))
}

export async function postRolesAssign(
  args: InferRequestType<typeof client.roles.assign.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.assign.$post(args, options))
}

export async function postRolesUnassign(
  args: InferRequestType<typeof client.roles.unassign.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.unassign.$post(args, options))
}

export async function postTablesTableIdRows(
  args: InferRequestType<(typeof client.tables)[':tableId']['rows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':tableId'].rows.$post(args, options))
}

export async function getTablesTableIdRowsRowId(
  args: InferRequestType<(typeof client.tables)[':tableId']['rows'][':rowId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':tableId'].rows[':rowId'].$get(args, options))
}

export async function putTablesTableIdRowsRowId(
  args: InferRequestType<(typeof client.tables)[':tableId']['rows'][':rowId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':tableId'].rows[':rowId'].$put(args, options))
}

export async function deleteTablesTableIdRowsRowId(
  args: InferRequestType<(typeof client.tables)[':tableId']['rows'][':rowId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':tableId'].rows[':rowId'].$delete(args, options))
}

export async function postTablesTableIdRowsSearch(
  args: InferRequestType<(typeof client.tables)[':tableId']['rows']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':tableId'].rows.search.$post(args, options))
}

export async function postTables(
  args: InferRequestType<typeof client.tables.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables.$post(args, options))
}

export async function getTablesTableId(
  args: InferRequestType<(typeof client.tables)[':tableId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':tableId'].$get(args, options))
}

export async function putTablesTableId(
  args: InferRequestType<(typeof client.tables)[':tableId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':tableId'].$put(args, options))
}

export async function deleteTablesTableId(
  args: InferRequestType<(typeof client.tables)[':tableId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables[':tableId'].$delete(args, options))
}

export async function postTablesSearch(
  args: InferRequestType<typeof client.tables.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tables.search.$post(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$get(args, options))
}

export async function putUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$put(args, options))
}

export async function deleteUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$delete(args, options))
}

export async function postUsersSearch(
  args: InferRequestType<typeof client.users.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.search.$post(args, options))
}

export async function postViews(
  args: InferRequestType<typeof client.views.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.views.$post(args, options))
}

export async function getViewsViewId(
  args: InferRequestType<(typeof client.views)[':viewId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.views[':viewId'].$get(args, options))
}

export async function putViewsViewId(
  args: InferRequestType<(typeof client.views)[':viewId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.views[':viewId'].$put(args, options))
}

export async function deleteViewsViewId(
  args: InferRequestType<(typeof client.views)[':viewId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.views[':viewId'].$delete(args, options))
}

export async function postViewsSearch(
  args: InferRequestType<typeof client.views.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.views.search.$post(args, options))
}

export async function postViewsViewIdRowsSearch(
  args: InferRequestType<(typeof client.views)[':viewId']['rows']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.views[':viewId'].rows.search.$post(args, options))
}

export async function postWorkspaces(
  args: InferRequestType<typeof client.workspaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.$post(args, options))
}

export async function getWorkspacesWorkspaceId(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].$get(args, options))
}

export async function putWorkspacesWorkspaceId(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].$put(args, options))
}

export async function deleteWorkspacesWorkspaceId(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].$delete(args, options))
}

export async function postWorkspacesWorkspaceIdPublish(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].publish.$post(args, options))
}

export async function postWorkspacesWorkspaceIdUnpublish(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['unpublish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].unpublish.$post(args, options))
}

export async function postWorkspacesWorkspaceIdImport(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].import.$post(args, options))
}

export async function postWorkspacesWorkspaceIdExport(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].export.$post(args, options))
}

export async function getWorkspacesWorkspaceIdGroups(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].groups.$get(args, options))
}

export async function postWorkspacesSearch(
  args: InferRequestType<typeof client.workspaces.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.search.$post(args, options))
}
