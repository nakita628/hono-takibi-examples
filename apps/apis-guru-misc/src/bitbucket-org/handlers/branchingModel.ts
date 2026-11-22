import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRepositoriesWorkspaceRepoSlugBranchingModelRoute,
  getRepositoriesWorkspaceRepoSlugBranchingModelSettingsRoute,
  getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelRoute,
  getWorkspacesWorkspaceProjectsProjectKeyBranchingModelRoute,
  getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRoute,
  putRepositoriesWorkspaceRepoSlugBranchingModelSettingsRoute,
  putWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const branchingModelHandler = app
  .openapi(getRepositoriesWorkspaceRepoSlugBranchingModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugBranchingModelSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugBranchingModelSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyBranchingModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
