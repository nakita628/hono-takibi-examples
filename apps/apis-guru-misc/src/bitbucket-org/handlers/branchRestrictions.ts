import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute,
  getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute,
  getRepositoriesWorkspaceRepoSlugBranchRestrictionsRoute,
  postRepositoriesWorkspaceRepoSlugBranchRestrictionsRoute,
  putRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const branchRestrictionsHandler = app
  .openapi(getRepositoriesWorkspaceRepoSlugBranchRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugBranchRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
