import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRoute,
  getRepositoriesWorkspaceRepoSlugSrcCommitPathRoute,
  getRepositoriesWorkspaceRepoSlugSrcRoute,
  postRepositoriesWorkspaceRepoSlugSrcRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourceHandler = app
  .openapi(getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugSrcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugSrcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugSrcCommitPathRoute, (c) => {
    throw new Error('Not implemented')
  })
