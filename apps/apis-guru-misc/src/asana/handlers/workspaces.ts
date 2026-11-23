import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWorkspacesRoute,
  getWorkspacesWorkspaceGidAuditLogEventsRoute,
  getWorkspacesWorkspaceGidCustomFieldsRoute,
  getWorkspacesWorkspaceGidProjectsRoute,
  getWorkspacesWorkspaceGidRoute,
  getWorkspacesWorkspaceGidTagsRoute,
  getWorkspacesWorkspaceGidTasksSearchRoute,
  getWorkspacesWorkspaceGidTeamsRoute,
  getWorkspacesWorkspaceGidTypeaheadRoute,
  getWorkspacesWorkspaceGidUsersRoute,
  getWorkspacesWorkspaceGidWorkspaceMembershipsRoute,
  postWorkspacesWorkspaceGidAddUserRoute,
  postWorkspacesWorkspaceGidProjectsRoute,
  postWorkspacesWorkspaceGidRemoveUserRoute,
  postWorkspacesWorkspaceGidTagsRoute,
  putWorkspacesWorkspaceGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
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
  .openapi(postWorkspacesWorkspaceGidRemoveUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceGidTagsRoute, (c) => {
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
  .openapi(getWorkspacesWorkspaceGidWorkspaceMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
