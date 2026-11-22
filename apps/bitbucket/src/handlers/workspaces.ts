import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkspacesWorkspaceHooksUidRoute,
  getUserWorkspacesRoute,
  getUserWorkspacesWorkspacePermissionRoute,
  getWorkspacesWorkspaceHooksRoute,
  getWorkspacesWorkspaceHooksUidRoute,
  getWorkspacesWorkspaceMembersMemberRoute,
  getWorkspacesWorkspaceMembersRoute,
  getWorkspacesWorkspacePermissionsRepositoriesRepoSlugRoute,
  getWorkspacesWorkspacePermissionsRepositoriesRoute,
  getWorkspacesWorkspacePermissionsRoute,
  getWorkspacesWorkspaceProjectsRoute,
  getWorkspacesWorkspacePullrequestsSelectedUserRoute,
  getWorkspacesWorkspaceRoute,
  getWorkspacesWorkspaceSettingsGpgPublicKeyRoute,
  postWorkspacesWorkspaceCodesearchRoute,
  postWorkspacesWorkspaceHooksRoute,
  putWorkspacesWorkspaceHooksUidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(getUserWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWorkspacesWorkspacePermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceCodesearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspaceHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceMembersMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspacePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspacePermissionsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspacePermissionsRepositoriesRepoSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspacePullrequestsSelectedUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceSettingsGpgPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
