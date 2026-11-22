import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitStatusesRoute,
  postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRoute,
  putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commitStatusesHandler = app
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
