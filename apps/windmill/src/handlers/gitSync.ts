import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGithubAppGhesAssignWorkspaceIdInstallationIdRoute,
  deleteWWorkspaceGithubAppInstallationInstallationIdRoute,
  getGithubAppConnectedRepositoriesRoute,
  getGithubAppGhesConfigRoute,
  getGithubAppGhesDiscoverRoute,
  getWWorkspaceGithubAppExportInstallationIdRoute,
  getWWorkspaceGitSyncCredentialOriginRoute,
  postGithubAppGhesAssignRoute,
  postWWorkspaceGithubAppGhesInstallationCallbackRoute,
  postWWorkspaceGithubAppImportRoute,
  postWWorkspaceGithubAppInstallFromWorkspaceRoute,
  postWWorkspaceGitSyncCredentialRoute,
  postWWorkspaceGitSyncGitlabProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gitSyncHandler = app
  .openapi(getGithubAppConnectedRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGithubAppInstallFromWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceGithubAppInstallationInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGithubAppExportInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGithubAppImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGitSyncGitlabProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGitSyncCredentialOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGitSyncCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGithubAppGhesInstallationCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubAppGhesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubAppGhesDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGithubAppGhesAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGithubAppGhesAssignWorkspaceIdInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
