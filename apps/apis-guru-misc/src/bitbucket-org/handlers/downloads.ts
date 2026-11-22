import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRoute,
  getRepositoriesWorkspaceRepoSlugDownloadsFilenameRoute,
  getRepositoriesWorkspaceRepoSlugDownloadsRoute,
  postRepositoriesWorkspaceRepoSlugDownloadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const downloadsHandler = app
  .openapi(getRepositoriesWorkspaceRepoSlugDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDownloadsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
