import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRepositoriesWorkspaceRepoSlugHooksUidRoute,
  deleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute,
  deleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute,
  deleteRepositoriesWorkspaceRepoSlugRoute,
  getRepositoriesWorkspaceRepoSlugForksRoute,
  getRepositoriesWorkspaceRepoSlugHooksRoute,
  getRepositoriesWorkspaceRepoSlugHooksUidRoute,
  getRepositoriesWorkspaceRepoSlugOverrideSettingsRoute,
  getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute,
  getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsRoute,
  getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersRoute,
  getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute,
  getRepositoriesWorkspaceRepoSlugRoute,
  getRepositoriesWorkspaceRepoSlugWatchersRoute,
  getRepositoriesWorkspaceRoute,
  getUserWorkspacesWorkspacePermissionsRepositoriesRoute,
  postRepositoriesWorkspaceRepoSlugForksRoute,
  postRepositoriesWorkspaceRepoSlugHooksRoute,
  postRepositoriesWorkspaceRepoSlugRoute,
  putRepositoriesWorkspaceRepoSlugHooksUidRoute,
  putRepositoriesWorkspaceRepoSlugOverrideSettingsRoute,
  putRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute,
  putRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute,
  putRepositoriesWorkspaceRepoSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const repositoriesHandler = app
  .openapi(getRepositoriesWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugOverrideSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugOverrideSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugWatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWorkspacesWorkspacePermissionsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
