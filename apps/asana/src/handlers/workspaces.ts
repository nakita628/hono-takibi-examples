import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWorkspacesRoute,
  getWorkspacesWorkspaceGidAgentsRoute,
  getWorkspacesWorkspaceGidAiStudioRunsRoute,
  getWorkspacesWorkspaceGidAiStudioSeatsRoute,
  getWorkspacesWorkspaceGidAuditLogEventsRoute,
  getWorkspacesWorkspaceGidCustomFieldsRoute,
  getWorkspacesWorkspaceGidEventsRoute,
  getWorkspacesWorkspaceGidProjectsRoute,
  getWorkspacesWorkspaceGidProjectsSearchRoute,
  getWorkspacesWorkspaceGidRecordsSearchRoute,
  getWorkspacesWorkspaceGidRoute,
  getWorkspacesWorkspaceGidTablesRoute,
  getWorkspacesWorkspaceGidTagsRoute,
  getWorkspacesWorkspaceGidTasksCustomIdCustomIdRoute,
  getWorkspacesWorkspaceGidTasksSearchRoute,
  getWorkspacesWorkspaceGidTeamsRoute,
  getWorkspacesWorkspaceGidTypeaheadRoute,
  getWorkspacesWorkspaceGidUsersRoute,
  getWorkspacesWorkspaceGidUsersUserGidRoute,
  getWorkspacesWorkspaceGidWorkspaceMembershipsRoute,
  postWorkspacesWorkspaceGidAddUserRoute,
  postWorkspacesWorkspaceGidProjectsRoute,
  postWorkspacesWorkspaceGidRemoveUserRoute,
  postWorkspacesWorkspaceGidTagsRoute,
  putWorkspacesWorkspaceGidRoute,
  putWorkspacesWorkspaceGidUsersUserGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(getWorkspacesWorkspaceGidAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidAiStudioRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidAiStudioSeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidAuditLogEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceGidProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidProjectsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidRecordsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceGidTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidTasksCustomIdCustomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidTasksSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidTypeaheadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidUsersUserGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceGidUsersUserGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidWorkspaceMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceGidAddUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceGidRemoveUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
