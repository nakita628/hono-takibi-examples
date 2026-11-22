import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute,
  deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitReportsRoute,
  postRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsRoute,
  putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute,
  putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
