import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute,
  deleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRoute,
  deleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRoute,
  getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute,
  getRepositoriesWorkspaceRepoSlugDeployKeysRoute,
  getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidRoute,
  getRepositoriesWorkspaceRepoSlugDeploymentsRoute,
  getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRoute,
  getRepositoriesWorkspaceRepoSlugEnvironmentsRoute,
  getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRoute,
  getWorkspacesWorkspaceProjectsProjectKeyDeployKeysRoute,
  postRepositoriesWorkspaceRepoSlugDeployKeysRoute,
  postRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesRoute,
  postRepositoriesWorkspaceRepoSlugEnvironmentsRoute,
  postWorkspacesWorkspaceProjectsProjectKeyDeployKeysRoute,
  putRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deploymentsHandler = app
  .openapi(getRepositoriesWorkspaceRepoSlugDeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugDeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyDeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceProjectsProjectKeyDeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
