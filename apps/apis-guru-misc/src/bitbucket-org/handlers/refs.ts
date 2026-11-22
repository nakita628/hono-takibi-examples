import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRoute,
  deleteRepositoriesWorkspaceRepoSlugRefsTagsNameRoute,
  getRepositoriesWorkspaceRepoSlugRefsBranchesNameRoute,
  getRepositoriesWorkspaceRepoSlugRefsBranchesRoute,
  getRepositoriesWorkspaceRepoSlugRefsRoute,
  getRepositoriesWorkspaceRepoSlugRefsTagsNameRoute,
  getRepositoriesWorkspaceRepoSlugRefsTagsRoute,
  postRepositoriesWorkspaceRepoSlugRefsBranchesRoute,
  postRepositoriesWorkspaceRepoSlugRefsTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const refsHandler = app
  .openapi(getRepositoriesWorkspaceRepoSlugRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugRefsBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugRefsBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugRefsBranchesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugRefsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugRefsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugRefsTagsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugRefsTagsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
